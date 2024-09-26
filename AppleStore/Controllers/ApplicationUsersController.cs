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
        public async Task<IActionResult> Register(ApplicationUserViewModels applicationUserViewModels,IFormFile file)
        {
            if (ModelState.IsValid)
            {
                var applicationUser = new ApplicationUser
                {
                    UserName = applicationUserViewModels.UserName,
                    Email = applicationUserViewModels.Email,
                    PhoneNumber = applicationUserViewModels.PhoneNumber,
                    Name = applicationUserViewModels.Name,
                    Address = applicationUserViewModels.Address,
                    Sex = applicationUserViewModels.Sex,
                    RoleId = 2,
                    ImagesUser = UploadImage(file)
                };
                
                // Hash mật khẩu
                var (hashedPassword, salt) = PasswordHasher.HashPassword(applicationUserViewModels.Password);
                // Gán giá trị hashedPassword vào thuộc tính Password của ApplicationUser
                applicationUser.Password = hashedPassword;
                applicationUser.Salt = salt; 

                await _applicationUserRepository.Add(applicationUser);
                await _applicationUserRepository.Save();
                return RedirectToAction("Index", "Home");
            }

            return View(applicationUserViewModels);
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

    }
}
