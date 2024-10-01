using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Apple.Models.ViewModels;
using Apple.Utility.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace AppleStore.ViewComponents
{
    public class ShoppingCartViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke() 
        {
            var shoppingcart=HttpContext.Session.Get<List<ShoppingCart>>(ConstVariable.CART_KEY) ?? new();
            return View("ShoppingCartPanel", new ShopppingCartViewModels
            {
                TotalItemCount = shoppingcart.Sum(p=>p.ShoppingCartItems.Count)
            });
        }
    }
}
