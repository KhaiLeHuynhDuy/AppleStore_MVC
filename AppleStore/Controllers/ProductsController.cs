using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Apple.Models.Models;
using Apple.Models.ViewModels;
using Apple.Domain.Repository.IRepository;

namespace AppleStore.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;

        public ProductsController(IProductRepository productRepository, ICategoryRepository categoryRepository)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
        }

        private IQueryable<Product> SortProduct(IQueryable<Product> products, string sortOrder)
        {
            ViewData["NameSortParam"] = string.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["PriceSortParam"] = sortOrder == "PriceOrder" ? "price_desc" : "PriceOrder";

            switch (sortOrder)
            {
                case "name_desc":
                    products = products.OrderByDescending(c => c.ProductName);
                    break;
                case "PriceOrder":
                    products = products.OrderBy(c => c.ProductPrice);
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
            if (!string.IsNullOrEmpty(searchString))
            {
                var searchLower = searchString.ToLower();
                products = products.Where(p => p.ProductName != null
                                                  && p.ProductName.ToLower().Contains(searchLower));
            }
            return products;
        }

        // GET: Products
        public async Task<IActionResult> Index(string sortOrder, string searchString)
        {
            var viewModel = new ProductViewModels();
            IQueryable<Product> products = _productRepository.GetAllProducts();

            // Gọi phương thức sắp xếp và tìm kiếm
            products = SearchProduct(products, searchString);
            products = SortProduct(products, sortOrder);

            viewModel.Products = await products.ToListAsync();
            return View(viewModel);
        }

        // GET: Products/Details/5
        public async Task<IActionResult> Details(int id)
        {
            var product = await _productRepository.GetProductById(id);

            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // GET: Products/Create
        public IActionResult Create()
        {
            // Tạo SelectList cho dropdown CategoryId
            ViewData["CategoryId"] = new SelectList(_categoryRepository.GetAllCategory(), "CategoryId", "CategoryName");
            return View();
        }

        // POST: Products/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ProductID,ProductName,Description,ProductPrice,CategoryId,ImageURL")] Product product)
        {
            if (ModelState.IsValid)
            {
                await _productRepository.Add(product);
                await _productRepository.Save();
                return RedirectToAction(nameof(Index));
            }

            // Nếu có lỗi, hãy làm lại SelectList cho dropdown để người dùng không bị mất dữ liệu
            ViewData["CategoryId"] = new SelectList(_categoryRepository.GetAllCategory(), "CategoryId", "CategoryName", product.CategoryId);
            return View(product);
        }

        // GET: Products/Edit/5
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var product = await _productRepository.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }

            // Tạo SelectList cho dropdown CategoryId
            ViewData["CategoryId"] = new SelectList(_categoryRepository.GetAllCategory(), "CategoryId", "CategoryName", product.CategoryId);

            return View(product);
        }

        // POST: Products/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, byte[] rowVersion)
        {
            var productToUpdate = await _productRepository.GetProductById(id);

            if (productToUpdate == null)
            {
                var deletedProduct = new Product();
                await TryUpdateModelAsync(deletedProduct);
                ModelState.AddModelError(string.Empty, "Unable to save changes. The product was deleted by another user.");

                ViewData["CategoryId"] = new SelectList(_categoryRepository.GetAllCategory(), "CategoryId", "CategoryName", deletedProduct.CategoryId);
                return View(deletedProduct);
            }

            // Cập nhật giá trị RowVersion để hỗ trợ xử lý đồng thời
            productToUpdate.RowVersion = rowVersion;

            if (await TryUpdateModelAsync(productToUpdate, "",
                p => p.ProductName, p => p.Description, p => p.ProductPrice, p => p.CategoryId, p => p.ImageURL))
            {
                try
                {
                    _productRepository.Update(productToUpdate); // Cập nhật thông qua repository
                    await _productRepository.Save(); // Lưu thay đổi qua repository
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

            ViewData["CategoryId"] = new SelectList(_categoryRepository.GetAllCategory(), "CategoryId", "CategoryName", productToUpdate.CategoryId);
            return View(productToUpdate);
        }


        // GET: Products/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _productRepository.GetProductById(id.Value);
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
            var product = await _productRepository.GetProductById(id);
            if (product != null)
            {
                _productRepository.Delete(product);
                await _productRepository.Save();
            }

            return RedirectToAction(nameof(Index));
        }

        private bool ProductExists(int id)
        {
            return _productRepository.GetAll().Any(e => e.ProductID == id);
        }
    }
}
