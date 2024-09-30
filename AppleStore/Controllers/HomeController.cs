using Apple.Domain.Repository;
using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Security.Claims;

namespace AppleStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly IShoppingCartRepository _shoppingCartRepository;
        public HomeController(IProductRepository productRepository, IShoppingCartRepository shoppingCartRepository)
        {
            _productRepository = productRepository;
            _shoppingCartRepository = shoppingCartRepository;
        }
        public IActionResult Index()
        {
            
            return View();
        }
        
        public async Task<IActionResult> Details(int id)
        {
            // Lấy sản phẩm từ repository
            var product = await _productRepository.GetProductById(id);

            // Kiểm tra nếu sản phẩm không tồn tại
            if (product == null)
            {
                // Trả về một trang lỗi hoặc thông báo sản phẩm không tìm thấy
                return NotFound("Product not found.");
            }

            return View(product);
        }
       
        public IActionResult Privacy()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public IActionResult DisplayProductByCategory(string category)
        {
            var product = _productRepository.GetAllProductsByCategory(category);
            return View(product);
        }
        public IActionResult IPhone()
        {
            return DisplayProductByCategory("Iphone");
        }
        public IActionResult IPad()
        {
            return DisplayProductByCategory("Ipad");
        }
        public IActionResult Mac()
        {
            return DisplayProductByCategory("Mac");
        }
        public IActionResult Airpod()
        {
            return DisplayProductByCategory("Airpod");
        }
        public IActionResult Watch()
        {
            return DisplayProductByCategory("Watch");
        }

    }
}
