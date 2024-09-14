using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Apple.DataAccess.Data;
using Apple.Models.Models;

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

        // GET: Categories/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Categories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CategoryId,CategoryName,DisplayOrder")] Category category)
        {
            if (ModelState.IsValid)
            {
                _context.Add(category);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
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

            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        // POST: Categories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CategoryId,CategoryName,DisplayOrder")] Category category)
        {
            if (id != category.CategoryId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(category);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CategoryExists(category.CategoryId))
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
            return View(category);
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
