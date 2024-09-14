﻿using System;
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

        // GET: Products/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            ViewData["CategoryId"] = new SelectList(_context.Categories, "CategoryId", "CategoryName", product.CategoryId);
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ProductID,ProductName,Description,ProductPrice,CategoryId,ImageURL")] Product product)
        {
            if (id != product.ProductID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(product);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProductExists(product.ProductID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoryId"] = new SelectList(_context.Categories, "CategoryId", "CategoryName", product.CategoryId);
            return View(product);
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
