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
using Apple.Models.ViewModels;
using Apple.Utility.Helpers;
using Microsoft.AspNetCore.Hosting;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
namespace AppleStore.Controllers
{
    public class ApplicationUsersController : Controller
    {
        private readonly IApplicationUserRepository _applicationUserRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ApplicationUsersController(IApplicationUserRepository applicationUserRepository, IWebHostEnvironment webHostEnvironment)
        {
            _applicationUserRepository = applicationUserRepository;
            _webHostEnvironment = webHostEnvironment;
        }
        public IActionResult Register()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(ApplicationUserViewModels applicationUserViewModels)
        {
            if (ModelState.IsValid)
            {
                // Kiểm tra xem người dùng đã tồn tại
                var existingUser = await _applicationUserRepository.FindUserByUserName(applicationUserViewModels.UserName);
                if (existingUser != null)
                {
                    ModelState.AddModelError(string.Empty, "Người dùng đã tồn tại.");
                    return View(applicationUserViewModels);
                }

                // Khởi tạo đối tượng ApplicationUser mới
                var applicationUser = new ApplicationUser
                {
                    UserName = applicationUserViewModels.UserName,
                    Email = applicationUserViewModels.Email,
                    Name = applicationUserViewModels.Name,
                    Sex = applicationUserViewModels.Sex,
                    RoleId = 2, // Xác định vai trò người dùng

                };

                // Băm mật khẩu
                var (hashedPassword, salt) = PasswordHasher.HashPassword(applicationUserViewModels.Password);
                applicationUser.Password = hashedPassword;
                applicationUser.Salt = salt;

               
                // Thêm người dùng vào cơ sở dữ liệu
                await _applicationUserRepository.Add(applicationUser);
                await _applicationUserRepository.Save();
                return RedirectToAction("Login", "ApplicationUsers");
            }

            // Trả lại view nếu ModelState không hợp lệ
            return View(applicationUserViewModels);
        }

        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginApplicationUserViewModels loginApplicationUserViewModels)
        {
            var applicationUser = await _applicationUserRepository.FindUserByUserName(loginApplicationUserViewModels.UserName);
            if (applicationUser == null)
            {
                ModelState.AddModelError(string.Empty, "User not found");
                return View(loginApplicationUserViewModels);  // Trả về view với lỗi
            }

            // So sánh mật khẩu
            if (applicationUser.Salt == null)
            {
                if (applicationUser.Password != loginApplicationUserViewModels.Password)
                {
                    ModelState.AddModelError(string.Empty, "Invalid password for default user.");
                    return View(loginApplicationUserViewModels);
                }
            }
            else
            {
                var hashedPassword = PasswordHasher.HashPasswordWithSalt(loginApplicationUserViewModels.Password, applicationUser.Salt);
                if (applicationUser.Password != hashedPassword)
                {
                    ModelState.AddModelError(string.Empty, "Invalid password");
                    return View(loginApplicationUserViewModels);
                }
            }

            // Tạo claims cho người dùng
            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, applicationUser.UserName ?? string.Empty),
                    new Claim(ClaimTypes.Email, applicationUser.Email ?? string.Empty),
                    new Claim(ClaimTypes.Role, applicationUser.RoleId.ToString()) // Duy trì tính linh hoạt
                };

            // Đăng nhập người dùng
            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, claimsPrincipal);
            TempData["SuccessMessage"] = $"Đăng nhập thành công! Chào mừng bạn, {applicationUser.UserName}!";
            return RedirectToAction("Index", "Home");
        }

        public string UploadImage(IFormFile file)
        {
            if (file == null)
            {
                throw new ArgumentNullException(nameof(file), "File không được null");
            }

            string wwwRootPath = _webHostEnvironment.WebRootPath;
            string fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            string productPath = Path.Combine(wwwRootPath, @"images\user");
            string filePath = Path.Combine(productPath, fileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Path.Combine(@"\images\user\" + fileName);
        }
        public void DeleteOldImage(string imagePath)
        {
            if (string.IsNullOrEmpty(imagePath))
            {
                throw new ArgumentException("Image path cannot be null or empty", nameof(imagePath));
            }

            string wwwRootPath = _webHostEnvironment.WebRootPath;
            string filePath = Path.Combine(wwwRootPath, imagePath.TrimStart('\\'));

            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
        }
        public IActionResult Profile()
        {
            return View();
        }
    }
}
