using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Apple.DataAccess.Data;
using Apple.Models.Models;
using Apple.Models.ViewModels;

namespace AppleStore.Controllers
{
    public class ProductsController : Controller
    {
        private readonly AppleStoreDbContext _context;

        public ProductsController(AppleStoreDbContext context)
        {
            _context = context;
        }
        private IQueryable<Product> SortProduct(IQueryable<Product> products, string sortOrder)
        {
            ViewData["NameSortParam"] = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["PriceSortParam"] = sortOrder == "PriceOrder" ? "price_desc" : "PriceOrder";
            switch (sortOrder)
            {
                case "name_desc":
                    products = products.OrderByDescending(c => c.ProductName);
                    break;
                case "PriceOrder":
                    products =  products.OrderBy(c => c.ProductPrice);
                    break;
                case "price_desc":
                    products = products.OrderByDescending(c => c.ProductPrice);
                    break;
                default:
                    products = products.OrderBy(c => c.ProductName);
                    break;
            }
            return products;
        }
        private IQueryable<Product> SearchProduct(IQueryable<Product> products, string searchString)
        {
            ViewData["Filter"] = searchString;
            if (!String.IsNullOrEmpty(searchString))
            {
                var searchLower = searchString.ToLower();
                products = products.Where(p => p.ProductName != null
                                                  && p.ProductName.ToLower().Contains(searchLower));
            }
            products.OrderBy(c => c.ProductName);
            
            return products;
        }
        // GET: Products
        public async Task<IActionResult> Index(string sortOrder, string searchString)
        {
            var viewModel = new ProductViewModels();
            
            IQueryable<Product> products = _context.Products.AsQueryable()
                .Include(p=>p.Category)
                .AsNoTracking();
            //goi ham sort
            products = SortProduct(products, sortOrder);
            //goi ham search
            products = SearchProduct(products, searchString);
            viewModel.Products = await products.ToListAsync();
            return View(viewModel);
        }

        // GET: Products/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .Include(p => p.Category)
                .FirstOrDefaultAsync(m => m.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // GET: Products/Create
        public IActionResult Create()
        {
            ViewData["CategoryId"] = new SelectList(_context.Categories, "CategoryId", "CategoryName");
            return View();
        }

        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ProductID,ProductName,Description,ProductPrice,CategoryId,ImageURL")] Product product)
        {
            if (ModelState.IsValid)
            {
                _context.Add(product);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoryId"] = new SelectList(_context.Categories, "CategoryId", "CategoryName", product.CategoryId);
            return View(product);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            // Fetch the product with the given id
            var product = await _context.Products
                .FirstOrDefaultAsync(p => p.ProductID == id);

            if (product == null)
            {
                return NotFound();
            }

            // Populate ViewBag with categories for the dropdown
            ViewBag.CategoryId = new SelectList(_context.Categories, "CategoryId", "CategoryName", product.CategoryId);

            return View(product);
        }

        // POST: Categories/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int? id, byte[] rowVersion)
        {
            if (id == null)
            {
                return NotFound();
            }

            var productToUpdate = await _context.Products
                .FirstOrDefaultAsync(p => p.ProductID == id);

            if (productToUpdate == null)
            {
                Product deletedProduct = new Product();
                await TryUpdateModelAsync(deletedProduct);
                ModelState.AddModelError(string.Empty, "Unable to save changes. The product was deleted by another user.");

                ViewBag.CategoryId = new SelectList(_context.Categories, "CategoryId", "CategoryName", deletedProduct.CategoryId);
                return View(deletedProduct);
            }

            _context.Entry(productToUpdate).Property("RowVersion").OriginalValue = rowVersion;

            if (await TryUpdateModelAsync(productToUpdate, "",
                p => p.ProductName, p => p.Description, p => p.ProductPrice, p => p.CategoryId, p => p.ImageURL))
            {
                try
                {
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    var exceptionEntry = ex.Entries.Single();
                    var clientValues = (Product)exceptionEntry.Entity;
                    var databaseEntry = exceptionEntry.GetDatabaseValues();
                    if (databaseEntry == null)
                    {
                        ModelState.AddModelError(string.Empty, "Unable to save changes. The product was deleted by another user.");
                    }
                    else
                    {
                        var databaseValues = (Product)databaseEntry.ToObject();

                        if (databaseValues.ProductName != clientValues.ProductName)
                        {
                            ModelState.AddModelError("ProductName", $"Current value: {databaseValues.ProductName}");
                        }
                        if (databaseValues.ProductPrice != clientValues.ProductPrice)
                        {
                            ModelState.AddModelError("ProductPrice", $"Current value: {databaseValues.ProductPrice}");
                        }
                        if (databaseValues.Description != clientValues.Description)
                        {
                            ModelState.AddModelError("Description", $"Current value: {databaseValues.Description}");
                        }

                        ModelState.AddModelError(string.Empty, "The record you attempted to edit was modified by another user after you got the original values.");

                        productToUpdate.RowVersion = databaseValues.RowVersion;
                        ModelState.Remove("RowVersion");
                    }
                }
            }

            ViewBag.CategoryId = new SelectList(_context.Categories, "CategoryId", "CategoryName", productToUpdate.CategoryId);
            return View(productToUpdate);
        }


        // GET: Products/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .Include(p => p.Category)
                .FirstOrDefaultAsync(m => m.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ProductID == id);
        }
    }
}
