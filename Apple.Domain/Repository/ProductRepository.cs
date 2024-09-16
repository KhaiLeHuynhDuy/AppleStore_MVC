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
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        private readonly AppleStoreDbContext _context;
        public ProductRepository(AppleStoreDbContext context):base (context)
        {
            _context = context;
        }
        IQueryable<Product> IProductRepository.GetAllProducts()
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

        public IQueryable<Product?> GetProductByCategory(string categoryname)
        {
            return _context.Products
                .Include(p => p.Category)
                .Where(p => p.Category.CategoryName == categoryname);
        }
    }
}
