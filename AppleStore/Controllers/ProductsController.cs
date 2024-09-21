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
using Microsoft.AspNetCore.Authorization;

namespace AppleStore.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ProductsController(IProductRepository productRepository, ICategoryRepository categoryRepository, IWebHostEnvironment webHostEnvironment)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
            _webHostEnvironment = webHostEnvironment;
        }

        private IQueryable<Product> SortProduct(IQueryable<Product> products, string sortOrder)
        {
            ViewData["NameSortParam"] = string.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["PriceSortParam"] = sortOrder == "PriceOrder" ? "price_desc" : "PriceOrder";

            products = sortOrder switch
            {
                "name_desc" => products.OrderByDescending(c => c.ProductName),
                "PriceOrder" => products.OrderBy(c => c.ProductPrice),
                "price_desc" => products.OrderByDescending(c => c.ProductPrice),
                _ => products.OrderBy(c => c.ProductName),
            };
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
        public async Task<IActionResult> Create([Bind("ProductID,ProductName,Description,ProductPrice,CategoryId,ImageURL")] Product product, IFormFile file)
        {
            if (ModelState.IsValid)
            {
                if (file != null && file.Length > 0)
                {
                    product.ImageURL = UploadImage(file);
                }
                await _productRepository.Add(product);
                await _productRepository.Save();
                return RedirectToAction(nameof(Index));
            }

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

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, byte[] rowVersion, IFormFile? file)
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
                    if (file != null)
                    {
                        // Delete the old image if it exists
                        if (!string.IsNullOrEmpty(productToUpdate.ImageURL))
                        {
                            DeleteOldImage(productToUpdate.ImageURL);
                        }

                        // Upload the new image and update the URL
                        productToUpdate.ImageURL = UploadImage(file);
                    }

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
                        if (databaseValues.ImageURL != clientValues.ImageURL)
                        {
                            ModelState.AddModelError("ImageURL", $"Current value: {databaseValues.ImageURL}");
                        }
                        ModelState.AddModelError(string.Empty, "The record you attempted to edit was modified by another user after you got the original values.");
                        productToUpdate.RowVersion = databaseValues.RowVersion;
                        ModelState.Remove("RowVersion");
                    }
                }
            }

            // Tạo SelectList cho dropdown CategoryId
            ViewBag["CategoryId"] = new SelectList(_categoryRepository.GetAllCategory(), "CategoryId", "CategoryName", productToUpdate.CategoryId);
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
        public string UploadImage(IFormFile file)
        {
            if (file == null)
            {
                throw new ArgumentNullException(nameof(file), "File không được null");
            }

            string wwwRootPath = _webHostEnvironment.WebRootPath;
            string fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            string productPath = Path.Combine(wwwRootPath, @"images\product");
            string filePath = Path.Combine(productPath, fileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Path.Combine(@"\images\product\" + fileName);
        }
        public void DeleteOldImage(string imagePath)
        {
            if (string.IsNullOrEmpty(imagePath))
            {
                throw new ArgumentException("Image path cannot be null or empty", nameof(imagePath));
            }

            string wwwRootPath = _webHostEnvironment.WebRootPath;
            string filePath = Path.Combine(wwwRootPath, imagePath.TrimStart('\\'));

            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
        }
    }
}
