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

namespace AppleStore.Controllers
{
    public class CategoriesController : Controller
    {
        private readonly AppleStoreDbContext _context;

        public CategoriesController(AppleStoreDbContext context)
        {
            _context = context;
        }
        //sort category theo ten, displayorder
        private IQueryable<Category> SortCategory(IQueryable<Category>categories, string sortOrder)
        {
            ViewData["NameSortParam"] = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["DisplaySortParam"] = sortOrder == "DisplayOrder" ? "display_desc" : "DisplayOrder";
            switch (sortOrder)
            {
                case "name_desc":
                    categories = categories.OrderByDescending(c => c.CategoryName);
                    break;
                case "DisplayOrder":
                    categories = categories.OrderBy(c => c.DisplayOrder);
                    break;
                case "display_desc":
                    categories = categories.OrderByDescending(c => c.DisplayOrder);
                    break;
                default:
                    categories = categories.OrderBy(c => c.CategoryName);
                    break;
            }
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
            categories.OrderBy(c => c.CategoryName);
            return categories;
        }
        // GET: Categories
        public async Task<IActionResult> Index(string sortOrder, string searchString)
        {
            IQueryable<Category> categories = _context.Categories.AsNoTracking();
            //goi ham sort category
            categories = SortCategory(categories, sortOrder);
            //goi ham search
            categories = SearchCategory(categories, searchString);
            return View(await categories.ToListAsync());
        }

        // GET: Categories/Create
        // GET: Categories/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Categories/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CategoryId,CategoryName,DisplayOrder")] Category category)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    // RowVersion is not set manually; it is handled by EF Core
                    _context.Add(category);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                catch (Exception ex)
                {
                    // Log exception if needed
                    ModelState.AddModelError(string.Empty, "An error occurred while creating the category. Please try again.");
                    return View(category);
                }
            }
            return View(category);
        }


        // GET: Categories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                .FirstOrDefaultAsync(m => m.CategoryId == id);
            if (category == null)
            {
                return NotFound();
            }

            return View(category);
        }

        // GET: Categories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories.AsNoTracking().FirstOrDefaultAsync(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        // POST: Categories/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Category category, byte[] rowVersion)
        {
            if (id != category.CategoryId)
            {
                return NotFound();
            }

            var categoryToUpdate = await _context.Categories
               // .AsNoTracking() // phai bo thuoc tinh nay neu khong thi se khong edit duoc do dbcontext khong theo doi
                .FirstOrDefaultAsync(c => c.CategoryId == id);

            if (categoryToUpdate == null)
            {
                ModelState.AddModelError(string.Empty, "Unable to save changes. The category was deleted by another user.");
                return View(category);
            }

            // Thiết lập giá trị RowVersion cho đối tượng cần cập nhật
            _context.Entry(categoryToUpdate).Property("RowVersion").OriginalValue = rowVersion;

            if (await TryUpdateModelAsync<Category>(
                categoryToUpdate,
                "",
                c => c.CategoryName, c => c.DisplayOrder))
            {
                try
                {
                    await _context.SaveChangesAsync();
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

                        ModelState.AddModelError(string.Empty, "The record you attempted to edit was modified by another user after you got the original value. The edit operation was canceled and the current values in the database have been displayed. If you still want to edit this record, click the Save button again. Otherwise click the Back to List hyperlink.");

                        categoryToUpdate.RowVersion = databaseValues.RowVersion;
                        ModelState.Remove("RowVersion");
                    }
                }
            }

            return View(categoryToUpdate);
        }

        // GET: Categories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                .FirstOrDefaultAsync(m => m.CategoryId == id);
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
            var category = await _context.Categories.FindAsync(id);
            if (category != null)
            {
                _context.Categories.Remove(category);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.CategoryId == id);
        }
    }
}
