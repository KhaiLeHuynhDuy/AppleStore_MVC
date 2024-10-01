using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Apple.Models.ViewModels;
using Apple.Utility.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AppleStore.ViewComponents
{
    public class ShoppingCartViewComponent : ViewComponent
    {
        private readonly IShoppingCartRepository _shoppingCartRepository;

        public ShoppingCartViewComponent(IShoppingCartRepository shoppingCartRepository)
        {
            _shoppingCartRepository = shoppingCartRepository;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            // Lấy userId từ Claims
            var userIdClaim = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            ShoppingCart shoppingcart;

            if (string.IsNullOrEmpty(userIdClaim))
            {
                // Nếu người dùng chưa đăng nhập, lấy giỏ hàng từ Session
                shoppingcart = HttpContext.Session.Get<ShoppingCart>(ConstVariable.CART_KEY) ?? new ShoppingCart();
            }
            else
            {
                // Nếu người dùng đã đăng nhập, lấy giỏ hàng từ cơ sở dữ liệu
                var userId = int.Parse(userIdClaim);
                shoppingcart = await _shoppingCartRepository.GetCartByUserId(userId)
                               ?? new ShoppingCart(); // Tạo mới nếu không tìm thấy giỏ hàng
            }
            // Tính tổng số lượng đơn hàng trong giỏ hàng
            var totalItemCount = shoppingcart.ShoppingCartItems.Sum(item => item.Count);

            // Trả về view với tổng số lượng
            return View("ShoppingCartPanel", new ShoppingCartViewModels
            {
                TotalItemCount = totalItemCount
            });
        }

    }
}
