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

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public IActionResult IPhone()
        {
            var iphone = _productRepository.GetProductByCategory("Iphone");
            return View(iphone);
        }
        public IActionResult IPad()
        {
            var ipad = _productRepository.GetProductByCategory("Ipad");   
            return View(ipad);
        }
        public IActionResult Mac()
        {
            var macbook = _productRepository.GetProductByCategory("Mac");
            return View(macbook);
        }
        public IActionResult Airpod()
        {
            var airpod = _productRepository.GetProductByCategory("Airpod");
            return View(airpod);
        }
        public IActionResult Watch()
        {
            var watch = _productRepository.GetProductByCategory("Watch");
            return View();
        }
    }
}
