﻿// <auto-generated />
using System;
using Apple.DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Apple.DataAccess.Migrations
{
    [DbContext(typeof(AppleStoreDbContext))]
    partial class AppleStoreDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Apple.Models.Models.ApplicationUser", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ImagesUser")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("Salt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte>("Sex")
                        .HasColumnType("tinyint");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("UserId");

                    b.HasIndex("RoleId");

                    b.ToTable("ApplicationUser", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Active = false,
                            Address = "307 Hoang Huu Nam, Thu Duc",
                            Email = "user1@gmail.com",
                            ImagesUser = "",
                            Name = "Nguyen Van A",
                            Password = "user1@aa",
                            PhoneNumber = "0123456789",
                            RoleId = 2,
                            Sex = (byte)0,
                            UserName = "user1"
                        },
                        new
                        {
                            UserId = 2,
                            Active = false,
                            Address = "456 Le Loi, TP.HCM",
                            Email = "user2@gmail.com",
                            ImagesUser = "",
                            Name = "Tran Thi B",
                            Password = "user2@bb",
                            PhoneNumber = "0987654321",
                            RoleId = 2,
                            Sex = (byte)1,
                            UserName = "user2"
                        },
                        new
                        {
                            UserId = 3,
                            Active = false,
                            Address = "123 Nguyen Hue, TP.HCM",
                            Email = "user3@gmail.com",
                            ImagesUser = "",
                            Name = "Le Van C",
                            Password = "user3@cc",
                            PhoneNumber = "0934567890",
                            RoleId = 2,
                            Sex = (byte)0,
                            UserName = "user3"
                        },
                        new
                        {
                            UserId = 4,
                            Active = true,
                            Address = "789 Tran Hung Dao, TP.HCM",
                            Email = "employee1@gmail.com",
                            ImagesUser = "",
                            Name = "Hoang Dung",
                            Password = "employee1@dd",
                            PhoneNumber = "0908765432",
                            RoleId = 3,
                            Sex = (byte)1,
                            UserName = "employee1"
                        });
                });

            modelBuilder.Entity("Apple.Models.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryId"));

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.HasKey("CategoryId");

                    b.ToTable("Category", (string)null);

                    b.HasData(
                        new
                        {
                            CategoryId = 1,
                            CategoryName = "Iphone",
                            DisplayOrder = 1
                        },
                        new
                        {
                            CategoryId = 2,
                            CategoryName = "Mac",
                            DisplayOrder = 2
                        },
                        new
                        {
                            CategoryId = 3,
                            CategoryName = "Ipad",
                            DisplayOrder = 3
                        },
                        new
                        {
                            CategoryId = 4,
                            CategoryName = "Airpod",
                            DisplayOrder = 4
                        });
                });

            modelBuilder.Entity("Apple.Models.Models.Product", b =>
                {
                    b.Property<int>("ProductID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProductID"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageURL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("ProductPrice")
                        .HasColumnType("float");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.HasKey("ProductID");

                    b.HasIndex("CategoryId");

                    b.ToTable("Product", (string)null);

                    b.HasData(
                        new
                        {
                            ProductID = 1,
                            CategoryId = 1,
                            Description = "Latest iPhone",
                            ImageURL = "",
                            ProductName = "iPhone 13",
                            ProductPrice = 999.99000000000001
                        },
                        new
                        {
                            ProductID = 2,
                            CategoryId = 2,
                            Description = "M1 MacBook",
                            ImageURL = "",
                            ProductName = "MacBook Air",
                            ProductPrice = 1299.99
                        },
                        new
                        {
                            ProductID = 3,
                            CategoryId = 3,
                            Description = "Latest iPad Pro",
                            ImageURL = "",
                            ProductName = "iPad Pro",
                            ProductPrice = 899.99000000000001
                        },
                        new
                        {
                            ProductID = 4,
                            CategoryId = 4,
                            Description = "Wireless Earbuds",
                            ImageURL = "",
                            ProductName = "AirPods Pro",
                            ProductPrice = 249.99000000000001
                        });
                });

            modelBuilder.Entity("Apple.Models.Models.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoleId"));

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("RoleId");

                    b.ToTable("Role", (string)null);

                    b.HasData(
                        new
                        {
                            RoleId = 1,
                            RoleName = "Admin"
                        },
                        new
                        {
                            RoleId = 2,
                            RoleName = "User"
                        },
                        new
                        {
                            RoleId = 3,
                            RoleName = "Employee"
                        });
                });

            modelBuilder.Entity("Apple.Models.Models.ShoppingCart", b =>
                {
                    b.Property<int>("ShoppingCartId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ShoppingCartId"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ExpirationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("ShoppingCartId");

                    b.HasIndex("UserId");

                    b.ToTable("ShoppingCart", (string)null);
                });

            modelBuilder.Entity("Apple.Models.Models.ShoppingCartItems", b =>
                {
                    b.Property<int>("ShoppingCartItemsID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ShoppingCartItemsID"));

                    b.Property<int>("Count")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("ProductID")
                        .HasColumnType("int");

                    b.Property<int>("ShoppingCartId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ShoppingCartItemsID");

                    b.HasIndex("ProductID");

                    b.HasIndex("ShoppingCartId");

                    b.ToTable("ShoppingCartItems");
                });

            modelBuilder.Entity("Apple.Models.Models.UserAdmin", b =>
                {
                    b.Property<int>("UserAdminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserAdminId"));

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("UserAdminId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserAdmin", (string)null);

                    b.HasData(
                        new
                        {
                            UserAdminId = 1,
                            Password = "admin@123",
                            RoleId = 1,
                            UserName = "admin"
                        });
                });

            modelBuilder.Entity("Apple.Models.Models.ApplicationUser", b =>
                {
                    b.HasOne("Apple.Models.Models.Role", "Roles")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Roles");
                });

            modelBuilder.Entity("Apple.Models.Models.Product", b =>
                {
                    b.HasOne("Apple.Models.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("Apple.Models.Models.ShoppingCart", b =>
                {
                    b.HasOne("Apple.Models.Models.ApplicationUser", "ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ApplicationUser");
                });

            modelBuilder.Entity("Apple.Models.Models.ShoppingCartItems", b =>
                {
                    b.HasOne("Apple.Models.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Apple.Models.Models.ShoppingCart", null)
                        .WithMany("ShoppingCartItems")
                        .HasForeignKey("ShoppingCartId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("Apple.Models.Models.UserAdmin", b =>
                {
                    b.HasOne("Apple.Models.Models.Role", "Roles")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Roles");
                });

            modelBuilder.Entity("Apple.Models.Models.ShoppingCart", b =>
                {
                    b.Navigation("ShoppingCartItems");
                });
#pragma warning restore 612, 618
        }
    }
}
