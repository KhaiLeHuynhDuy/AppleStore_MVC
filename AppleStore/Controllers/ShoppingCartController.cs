using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Apple.DataAccess.Data;
using Apple.Models.Models;
using Apple.Domain.Repository.IRepository;

namespace AppleStore.Controllers
{
    public class ShoppingCartController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly IShoppingCartRepository _shoppingCartRepository;
        private readonly IShoppingCartItemRepository _shoppingCartItemRepository;

        public ShoppingCartController(IProductRepository productRepository, IShoppingCartRepository shoppingCartRepository,IShoppingCartItemRepository shoppingCartItemRepository)
        {
            _productRepository = productRepository;
            _shoppingCartRepository = shoppingCartRepository;
            _shoppingCartItemRepository = shoppingCartItemRepository;
        }

        public async Task<IActionResult> AddToCart(int productId, int count, int userId)
        {
            // Kiểm tra xem sản phẩm có tồn tại không
            var product = await _productRepository.GetProductById(productId);
            if (product == null)
            {
                return NotFound("Product not found");
            }

           
            await _shoppingCartItemRepository.Save();

            // Chuyển hướng người dùng đến trang giỏ hàng hoặc trang sản phẩm
            return RedirectToAction("Index", "ShoppingCart"); // Chuyển hướng đến trang giỏ hàng
        }

    }
}
