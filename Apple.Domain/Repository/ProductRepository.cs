using Apple.DataAccess.Data;
using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Apple.Domain.Repository
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        private readonly AppleStoreDbContext _context;

        public ProductRepository(AppleStoreDbContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<Product> GetAllProducts()
        {
            return _context.Products
                .Include(p => p.Category);
        }

        public async Task<Product?> GetProductById(int id)
        {
            return await _context.Products
                .Include(p => p.Category)
                .FirstOrDefaultAsync(p => p.ProductID == id);
        }

        public IQueryable<Product> GetAllProductsByCategory(string categoryName)
        {
            return _context.Products
                .Include(p => p.Category)
                .Where(p => p.Category.CategoryName == categoryName);
        }

        
    }
}
