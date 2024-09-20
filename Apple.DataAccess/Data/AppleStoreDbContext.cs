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
    public class AppleStoreDbContext:IdentityDbContext<IdentityUser>
    {
        public AppleStoreDbContext(DbContextOptions<AppleStoreDbContext>options):base(options) 
        {
            
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
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
        }

    }
}
