using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AppleStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        public HomeController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Details(int id)
        {
            var productdetails = await _productRepository.GetProductById(id);
            return View(productdetails);
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
            var product = _productRepository.GetProductByCategory(category);
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
