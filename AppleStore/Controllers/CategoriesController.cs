using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Apple.DataAccess.Data;
using Apple.Models.Models;
using System.Drawing.Design;
using Apple.Domain.Repository.IRepository;
using Apple.Domain.Repository;
using Microsoft.AspNetCore.Authorization;

namespace AppleStore.Controllers
{
    public class CategoriesController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoriesController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        //sort category theo name, displayorder
        private IQueryable<Category> SortCategory(IQueryable<Category>categories, string sortOrder)
        {
            ViewData["NameSortParam"] = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["DisplaySortParam"] = sortOrder == "DisplayOrder" ? "display_desc" : "DisplayOrder";
            categories = sortOrder switch
            {
                "name_desc" => categories.OrderByDescending(c => c.CategoryName),
                "DisplayOrder" => categories.OrderBy(c => c.DisplayOrder),
                "display_desc" => categories.OrderByDescending(c => c.DisplayOrder),
                _ => categories.OrderBy(c => c.CategoryName),
            };
            return categories;
        }
        private IQueryable<Category> SearchCategory(IQueryable<Category>categories, string searchString)
        {
            ViewData["Filter"] = searchString;
            if (!String.IsNullOrEmpty(searchString))
            {
                var searchLower = searchString.ToLower();
                categories = categories.Where(c => c.CategoryName != null
                                                  && c.CategoryName.ToLower().Contains(searchLower));
            }
            return categories;
        }
        // GET: Categories
        public async Task<IActionResult> Index(string sortOrder, string searchString)
        {
            IQueryable<Category> categories = _categoryRepository.GetAllCategory();
            //goi ham sort category
            categories = SortCategory(categories, sortOrder);
            //goi ham search
            categories = SearchCategory(categories, searchString);
            return View(await categories.ToListAsync());
        }

        // GET: Categories/Create
        public IActionResult Create()
        {
            return View();
        }
        // POST: Categories/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CategoryName,DisplayOrder")] Category category)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _categoryRepository.Add(category);
                    await _categoryRepository.Save();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateException)
                {
                    // Log exception if needed
                    ModelState.AddModelError(string.Empty, "An error occurred while creating the category. Please try again.");
                    return View(category);
                }
            }
            return View(category);
        }

        // GET: Categories/Details/5
        public async Task<IActionResult> Details(int id)
        {
            var category = await _categoryRepository.GetCategoryById(id);
            if (category == null)
            {
                return NotFound();
            }

            return View(category);
        }

        // GET: Categories/Edit/5
        public async Task<IActionResult> Edit(int id)
        {
            var category = await _categoryRepository.GetCategoryById(id);
            if (category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        // POST: Categories/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, byte[] rowVersion)
        {
            var categoryToUpdate = await _categoryRepository.GetCategoryById(id);

            if (categoryToUpdate == null)
            {
                ModelState.AddModelError(string.Empty, "Unable to save changes. The category was deleted by another user.");
                return View(new Category());
            }

            categoryToUpdate.RowVersion = rowVersion;

            if (await TryUpdateModelAsync(categoryToUpdate, "",
                c => c.CategoryName, c => c.DisplayOrder))
            {
                try
                {
                    _categoryRepository.Update(categoryToUpdate);
                    await _categoryRepository.Save();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    var exceptionEntry = ex.Entries.Single();
                    var clientValues = (Category)exceptionEntry.Entity;
                    var databaseEntry = exceptionEntry.GetDatabaseValues();

                    if (databaseEntry == null)
                    {
                        ModelState.AddModelError(string.Empty, "Unable to save changes. The category was deleted by another user.");
                    }
                    else
                    {
                        var databaseValues = (Category)databaseEntry.ToObject();

                        if (databaseValues.CategoryName != clientValues.CategoryName)
                        {
                            ModelState.AddModelError("CategoryName", $"Current value: {databaseValues.CategoryName}");
                        }
                        if (databaseValues.DisplayOrder != clientValues.DisplayOrder)
                        {
                            ModelState.AddModelError("DisplayOrder", $"Current value: {databaseValues.DisplayOrder}");
                        }

                        ModelState.AddModelError(string.Empty, "The record you attempted to edit was modified by another user after you got the original values.");

                        categoryToUpdate.RowVersion = databaseValues.RowVersion;
                        ModelState.Remove("RowVersion");
                    }
                }
            }

            return View(categoryToUpdate);
        }

        // GET: Categories/Delete/5
        public async Task<IActionResult> Delete(int id)
        {
           

            var category = await _categoryRepository.GetCategoryById(id);
            if (category == null)
            {
                return NotFound();
            }

            return View(category);
        }

        // POST: Categories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var category = await _categoryRepository.GetCategoryById(id);
            if (category == null)
            {
                return NotFound();
            }
            
            _categoryRepository.Delete(category);
            await _categoryRepository.Save();
            return RedirectToAction(nameof(Index));
        }

        private bool CategoryExists(int id)
        {
            return _categoryRepository.GetAllCategory().Any(e => e.CategoryId == id);
        }
    }
}
