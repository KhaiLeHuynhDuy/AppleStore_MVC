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
    public class ShoppingCartRepository : Repository<ShoppingCart>, IShoppingCartRepository
    {
        private readonly AppleStoreDbContext _context;
        public ShoppingCartRepository(AppleStoreDbContext context):base(context) 
        {
            _context = context;
        }

        public async Task<ShoppingCart?> GetCartByUserId(int userId)
        {
            var cart = await _context.ShoppingCarts
                .Include(cart => cart.ShoppingCartItems)
                .ThenInclude(item => item.Product)
                .FirstOrDefaultAsync(cart => cart.UserId == userId);

            if (cart == null)
            {
                // Có thể ném ra một ngoại lệ hoặc tạo một ShoppingCart mặc định
                throw new InvalidOperationException("Giỏ hàng không tồn tại cho người dùng");
            }

            return cart;
        }
        public async Task SaveCart(ShoppingCart cart)
        {
            _context.ShoppingCarts.Update(cart);
            await _context.SaveChangesAsync();
        }
    }
}
