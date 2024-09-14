using Apple.DataAccess.Data;
using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Domain.Repository
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        private readonly AppleStoreDbContext _context;
        public CategoryRepository(AppleStoreDbContext context):base(context)
        {
            _context = context;
        }
        IQueryable<Category> ICategoryRepository.GetAllCategory()
        {
            return _context.Categories
                .AsNoTracking();
        }

        public async Task<Category?>GetCategoryById(int id)
        {
            return await _context.Categories.FirstOrDefaultAsync(c => c.CategoryId == id);
        }
    }
}
