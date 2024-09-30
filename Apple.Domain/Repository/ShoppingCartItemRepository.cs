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
    public class ShoppingCartItemRepository:Repository<ShoppingCartItem>,IShoppingCartItemRepository
    {
        private readonly AppleStoreDbContext _context;
        public ShoppingCartItemRepository(AppleStoreDbContext context):base(context) 
        {
            _context = context;
        }
        public IQueryable<ShoppingCartItem> GetAllProductInShoppingCartItem()
        {
            return _context.ShoppingCartItems.Include(s => s.Product);
        }

        public async Task<ShoppingCartItem> GetProductInShoppingCartByUserId(int userId)
        {
            var item = await _context.ShoppingCartItems
               .Include(item => item.Product)
               .FirstOrDefaultAsync(item => item.ShoppingCart.UserId == userId);

            // Nếu item là null, bạn có thể ném ra ngoại lệ
            if (item == null)
            {
                throw new InvalidOperationException($"No shopping cart item found for user with ID {userId}");
            }

            return item;
        }
    }
}
