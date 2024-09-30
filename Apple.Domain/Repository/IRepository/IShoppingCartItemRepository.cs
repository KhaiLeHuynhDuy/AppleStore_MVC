using Apple.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Domain.Repository.IRepository
{
    public interface IShoppingCartItemRepository: IRepository<ShoppingCartItem>
    {
        IQueryable<ShoppingCartItem> GetAllProductInShoppingCartItem();
        Task<ShoppingCartItem> GetProductInShoppingCartByUserId(int userId);
    }
}
