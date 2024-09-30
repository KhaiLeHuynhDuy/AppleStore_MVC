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

        public async Task<ShoppingCart> GetCartByUserId(int userId)
        {
            return await _context.ShoppingCarts
                .Include(cart => cart.ShoppingCartItems) // Đảm bảo bao gồm CartItems
                .ThenInclude(item => item.Product) // Nếu cần bao gồm Product
                .FirstOrDefaultAsync(cart => cart.UserId == userId);
        }


        public async Task SaveCart(ShoppingCart cart)
        {
            _context.ShoppingCarts.Update(cart);
            await _context.SaveChangesAsync();
        }
    }
}
