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
            var shoppingCart = await _context.ShoppingCarts
                .Include(sc => sc.ShoppingCartItem)
                .ThenInclude(item=>item.Product)
                .FirstOrDefaultAsync(sc => sc.UserId == userId);

            if (shoppingCart == null)
            {
               
                 return new ShoppingCart { UserId = userId };
            }

            return shoppingCart;
        }

    }
}
