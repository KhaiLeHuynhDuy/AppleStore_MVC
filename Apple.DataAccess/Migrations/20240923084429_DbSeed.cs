using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Apple.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class DbSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    RoleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleName = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    ProductID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductPrice = table.Column<double>(type: "float", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    ImageURL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.ProductID);
                    table.ForeignKey(
                        name: "FK_Product_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ApplicationUser",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Address = table.Column<string>(type: "nvarchar(70)", maxLength: 70, nullable: true),
                    RoleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUser", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_ApplicationUser_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserAdmin",
                columns: table => new
                {
                    UserAdminId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    RoleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAdmin", x => x.UserAdminId);
                    table.ForeignKey(
                        name: "FK_UserAdmin_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Category",
                columns: new[] { "CategoryId", "CategoryName", "DisplayOrder" },
                values: new object[,]
                {
                    { 1, "Iphone", 1 },
                    { 2, "Mac", 2 },
                    { 3, "Ipad", 3 },
                    { 4, "Airpod", 4 }
                });

            migrationBuilder.InsertData(
                table: "Role",
                columns: new[] { "RoleId", "RoleName" },
                values: new object[,]
                {
                    { 1, "Admin" },
                    { 2, "User" },
                    { 3, "Employee" }
                });

            migrationBuilder.InsertData(
                table: "ApplicationUser",
                columns: new[] { "UserId", "Address", "Email", "Name", "Password", "PhoneNumber", "RoleId", "UserName" },
                values: new object[,]
                {
                    { 1, "307 Hoang Huu Nam, Thu Duc", "user1@gmail.com", "Nguyen Van A", "user1@aa", "0123456789", 2, "user1" },
                    { 2, "456 Le Loi, TP.HCM", "user2@gmail.com", "Tran Thi B", "user2@bb", "0987654321", 2, "user2" },
                    { 3, "123 Nguyen Hue, TP.HCM", "user3@gmail.com", "Le Van C", "user3@cc", "0934567890", 2, "user3" },
                    { 4, "789 Tran Hung Dao, TP.HCM", "employee1@gmail.com", "Hoang Dung", "employee1@dd", "0908765432", 3, "employee1" }
                });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "ProductID", "CategoryId", "Description", "ImageURL", "ProductName", "ProductPrice" },
                values: new object[,]
                {
                    { 1, 1, "Latest iPhone", "", "iPhone 13", 999.99000000000001 },
                    { 2, 2, "M1 MacBook", "", "MacBook Air", 1299.99 },
                    { 3, 3, "Latest iPad Pro", "", "iPad Pro", 899.99000000000001 },
                    { 4, 4, "Wireless Earbuds", "", "AirPods Pro", 249.99000000000001 }
                });

            migrationBuilder.InsertData(
                table: "UserAdmin",
                columns: new[] { "UserAdminId", "Password", "RoleId", "UserName" },
                values: new object[] { 1, "admin@123", 1, "admin" });

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUser_RoleId",
                table: "ApplicationUser",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Product_CategoryId",
                table: "Product",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_UserAdmin_RoleId",
                table: "UserAdmin",
                column: "RoleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationUser");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "UserAdmin");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "Role");
        }
    }
}
