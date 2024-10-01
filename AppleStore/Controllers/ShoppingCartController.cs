using Apple.Domain.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using Apple.Utility.Helpers;
using Apple.Models.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace AppleStore.Controllers
{
    public class ShoppingCartController : Controller
    {
        private readonly IShoppingCartRepository _shoppingCartRepository;
        private readonly IProductRepository _productRepository;
       

        public ShoppingCartController(IShoppingCartRepository shoppingCartRepository, IProductRepository productRepository)
        {
            _shoppingCartRepository = shoppingCartRepository;
            _productRepository = productRepository;
        }

        public List<ShoppingCart> ShoppingCart => HttpContext.Session.Get<List<ShoppingCart>>(ConstVariable.CART_KEY) ?? new();

        public async Task<IActionResult> Index()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            

            // Lấy giỏ hàng từ session
            var cart = HttpContext.Session.Get<List<ShoppingCartItems>>("Cart") ?? new List<ShoppingCartItems>();

            if (!string.IsNullOrEmpty(userIdClaim))
            {
                var userId = int.Parse(userIdClaim);
                var shoppingCart = await _shoppingCartRepository.GetCartByUserId(userId);

                // Thêm các mục từ giỏ hàng trong session vào giỏ hàng trong DB nếu có
                if (shoppingCart != null)
                {
                    // Thêm các mục từ cart vào shoppingCart
                    foreach (var item in cart)
                    {
                        var existingItem = shoppingCart.ShoppingCartItems.SingleOrDefault(ci => ci.ProductID == item.ProductID);
                        if (existingItem != null)
                        {
                            // Nếu sản phẩm đã tồn tại, tăng số lượng
                            existingItem.Count += item.Count;
                        }
                        else
                        {
                            // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
                            shoppingCart.ShoppingCartItems.Add(item);
                        }
                    }

                    // Lưu giỏ hàng vào DB
                    await _shoppingCartRepository.SaveCart(shoppingCart);
                    HttpContext.Session.Remove("Cart"); // Xóa giỏ hàng tạm thời trong session
                    return View(shoppingCart.ShoppingCartItems);
                }
            }

            // Nếu không có giỏ hàng
            if (!cart.Any())
            {
                ViewBag.Message = "Giỏ hàng của bạn trống.";
                return View(new List<ShoppingCartItems>());
            }

            // Nếu người dùng chưa đăng nhập, vẫn trả về giỏ hàng từ session
            ViewBag.Message += " Bạn cần đăng nhập để thực hiện thanh toán.";
            return View(cart);
        }



        public async Task<IActionResult> AddToCart(int productId, int count)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            // Nếu người dùng chưa đăng nhập, lưu giỏ hàng trong Session
            if (string.IsNullOrEmpty(userIdClaim))
            {
                var cart = HttpContext.Session.Get<List<ShoppingCartItems>>("Cart") ?? new List<ShoppingCartItems>();

                // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng tạm thời
                var item = cart.SingleOrDefault(ci => ci.ProductID == productId);
                if (item != null)
                {
                    // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm trong giỏ hàng
                    item.Count += count;
                }
                else
                {
                    // Nếu sản phẩm chưa tồn tại, lấy thông tin sản phẩm từ cơ sở dữ liệu
                    var product = await _productRepository.GetProductById(productId);
                    if (product == null)
                    {
                        return NotFound(); // Nếu sản phẩm không tìm thấy, trả về lỗi 404
                    }

                    // Thêm sản phẩm mới vào giỏ hàng
                    cart.Add(new ShoppingCartItems
                    {
                        ProductID = productId,
                        Product = product,
                        Count = count,
                        CreatedAt = DateTime.UtcNow
                    });
                }

                // Lưu giỏ hàng vào session
                HttpContext.Session.Set("Cart", cart);
                TempData["Message"] = "Sản phẩm đã được thêm vào giỏ hàng tạm thời.";
                return RedirectToAction("Index");
            }

            // Nếu người dùng đã đăng nhập, lưu giỏ hàng vào cơ sở dữ liệu
            var userId = int.Parse(userIdClaim);

            // Lấy giỏ hàng từ cơ sở dữ liệu hoặc tạo mới nếu chưa có
            var shoppingCart = await _shoppingCartRepository.GetCartByUserId(userId)
                ?? new ShoppingCart { UserId = userId, ShoppingCartItems = new List<ShoppingCartItems>() };

            // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng của DB
            var itemInDb = shoppingCart.ShoppingCartItems.SingleOrDefault(ci => ci.ProductID == productId);
            if (itemInDb != null)
            {
                // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm
                itemInDb.Count += count;
            }
            else
            {
                // Thêm sản phẩm mới vào giỏ hàng
                var productInDb = await _productRepository.GetProductById(productId);
                if (productInDb == null)
                {
                    return NotFound();
                }

                shoppingCart.ShoppingCartItems.Add(new ShoppingCartItems
                {
                    ProductID = productId,
                    Product = productInDb,
                    Count = count,
                    CreatedAt = DateTime.UtcNow,
                });
            }

            // Lưu giỏ hàng vào cơ sở dữ liệu
            await _shoppingCartRepository.SaveCart(shoppingCart);
            TempData["Message"] = "Sản phẩm đã được thêm vào giỏ hàng.";
            return RedirectToAction("Index");
        }

    }
}
