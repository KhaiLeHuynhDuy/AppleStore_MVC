using Apple.Models.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.DataAccess.Data
{
    public class AppleStoreDbContext:DbContext
    {
        public AppleStoreDbContext(DbContextOptions<AppleStoreDbContext>options):base(options) 
        {
            
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers {  get; set; }
        public DbSet<UserAdmin> UserAdmins { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<ShoppingCart> ShoppingCarts { get; set; }
        public DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Category>().ToTable("Category");
            modelBuilder.Entity<Category>().HasData(
                new Category { CategoryId = 1, CategoryName = "Iphone", DisplayOrder = 1 },
                new Category { CategoryId = 2, CategoryName = "Mac", DisplayOrder = 2 },
                new Category { CategoryId = 3, CategoryName = "Ipad", DisplayOrder = 3 },
                new Category { CategoryId = 4, CategoryName = "Airpod", DisplayOrder = 4 }
            );
            modelBuilder.Entity<Product>().ToTable("Product");
            modelBuilder.Entity<Product>().HasData(
                new Product { ProductID = 1, ProductName = "iPhone 13", Description = "Latest iPhone", ProductPrice = 999.99, CategoryId = 1, ImageURL = "" },
                new Product { ProductID = 2, ProductName = "MacBook Air", Description = "M1 MacBook", ProductPrice = 1299.99, CategoryId = 2, ImageURL = "" },
                new Product { ProductID = 3, ProductName = "iPad Pro", Description = "Latest iPad Pro", ProductPrice = 899.99, CategoryId = 3, ImageURL = "" },
                new Product { ProductID = 4, ProductName = "AirPods Pro", Description = "Wireless Earbuds", ProductPrice = 249.99, CategoryId = 4, ImageURL = "" }
            );
            modelBuilder.Entity<Role>().ToTable("Role");
            modelBuilder.Entity<Role>().HasData(
                new Role { RoleId = 1, RoleName = "Admin" },
                new Role { RoleId = 2, RoleName = "User" },
                new Role { RoleId = 3, RoleName = "Employee" }
            );
            modelBuilder.Entity<ApplicationUser>().ToTable("ApplicationUser");
            modelBuilder.Entity<ApplicationUser>().HasData(
                new ApplicationUser
                {
                    UserId = 1,
                    UserName = "user1",
                    Address = "307 Hoang Huu Nam, Thu Duc",
                    Email = "user1@gmail.com",
                    Name = "Nguyen Van A",
                    PhoneNumber = "0123456789",
                    Password = "user1@aa",
                    RoleId = 2,
                    ImagesUser = "",
                    Active = false,
                    Sex = 0
                },
                new ApplicationUser
                {
                    UserId = 2,
                    UserName = "user2",
                    Address = "456 Le Loi, TP.HCM",
                    Email = "user2@gmail.com",
                    Name = "Tran Thi B",
                    PhoneNumber = "0987654321",
                    Password = "user2@bb",
                    RoleId = 2,
                    ImagesUser = "",
                    Active = false,
                    Sex = 1
                },
                new ApplicationUser
                {
                    UserId = 3,
                    UserName = "user3",
                    Address = "123 Nguyen Hue, TP.HCM",
                    Email = "user3@gmail.com",
                    Name = "Le Van C",
                    PhoneNumber = "0934567890",
                    Password = "user3@cc",
                    RoleId = 2,
                    ImagesUser = "",
                    Active = false,
                    Sex = 0
                },
                new ApplicationUser
                {
                    UserId = 4,
                    UserName = "employee1",
                    Address = "789 Tran Hung Dao, TP.HCM",
                    Email = "employee1@gmail.com",
                    Name = "Hoang Dung",
                    PhoneNumber = "0908765432",
                    Password = "employee1@dd",
                    RoleId = 3,
                    ImagesUser = "",
                    Active = true,
                    Sex = 1
                }
            );
            modelBuilder.Entity<UserAdmin>().ToTable("UserAdmin");
            modelBuilder.Entity<UserAdmin>().HasData(
                new UserAdmin
                {
                    UserAdminId = 1,
                    UserName = "admin",
                    Password = "admin@123",
                    RoleId = 1,
                }
            );
            modelBuilder.Entity<ShoppingCart>().ToTable("ShoppingCart");
            modelBuilder.Entity<ShoppingCart>().HasData(
                new ShoppingCart { ShoppingCartId = 1, UserId = 1 },
                new ShoppingCart { ShoppingCartId = 2, UserId = 2 }
            );
            modelBuilder.Entity<ShoppingCartItem>().ToTable("ShoppingCartItem").HasData(
                new ShoppingCartItem { ShoppingCartItemId = 1, ShoppingCartId = 1, ProductID = 1, Count = 2 }, // user1 thêm 2 iPhone 13
                new ShoppingCartItem { ShoppingCartItemId = 2, ShoppingCartId = 1, ProductID = 2, Count = 1 }, // user1 thêm 1 MacBook Air
                new ShoppingCartItem { ShoppingCartItemId = 3, ShoppingCartId = 2, ProductID = 3, Count = 1 }, // user2 thêm 1 iPad Pro
                new ShoppingCartItem { ShoppingCartItemId = 4, ShoppingCartId = 2, ProductID = 4, Count = 3 }  // user2 thêm 3 AirPods Pro
            );
        }
    }
}

