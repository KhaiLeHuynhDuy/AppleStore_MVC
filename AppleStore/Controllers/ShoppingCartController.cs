using Apple.Domain.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using Apple.Utility.Helpers;
using Apple.Models.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
namespace AppleStore.Controllers
{
    public class ShoppingCartController : Controller
    {

        private IShoppingCartRepository _shoppingCartRepository;
        private IProductRepository _productRepository;

        public ShoppingCartController(IShoppingCartRepository shoppingCartRepository, IProductRepository productRepository)
        {
            _shoppingCartRepository = shoppingCartRepository;
            _productRepository = productRepository;
        }

        const string CART_KEY = "MYCART";

        public List<ShoppingCart> ShoppingCart => HttpContext.Session.Get<List<ShoppingCart>>(CART_KEY) ?? new List<ShoppingCart>();

        public IActionResult Index()
        {
            return View(ShoppingCart);
        }
        [Authorize]
        public async Task<IActionResult> AddToCart(int productId, int count)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim))
            {
                // Nếu không tìm thấy userId, có thể chuyển hướng đến trang đăng nhập
                return RedirectToAction("Login", "ApplicationUsers"); // Thay "Account" bằng controller phù hợp
            }

            // Lấy userId từ claims
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            // Lấy giỏ hàng của người dùng từ cơ sở dữ liệu hoặc tạo mới nếu không tồn tại
            var shoppingCart = await _shoppingCartRepository.GetCartByUserId(userId) ?? new ShoppingCart { UserId = userId, ShoppingCartItems = new List<ShoppingCartItems>() };

            // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
            var item = shoppingCart.ShoppingCartItems.SingleOrDefault(ci => ci.ProductID == productId);
            if (item != null)
            {
                // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm trong giỏ hàng
                item.Count += count;
            }
            else
            {
                // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
                var product = await _productRepository.GetProductById(productId);
                if (product == null)
                {
                    return NotFound(); // Nếu sản phẩm không tìm thấy, trả về lỗi 404
                }

                // Thêm sản phẩm mới vào giỏ hàng
                shoppingCart.ShoppingCartItems.Add(new ShoppingCartItems
                {
                    ProductID = productId,
                    Product = product,
                    Count = count,
                    CreatedAt = DateTime.UtcNow,
                   
                });
            }
            // Cập nhật hoặc thêm mới giỏ hàng vào cơ sở dữ liệu
            await _shoppingCartRepository.SaveCart(shoppingCart);
            return RedirectToAction("Index");
        }

    }

}
