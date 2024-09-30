using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Apple.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class modifyShoppingCart : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShoppingCart_Product_ProductID",
                table: "ShoppingCart");

            migrationBuilder.DropIndex(
                name: "IX_ShoppingCart_ProductID",
                table: "ShoppingCart");

            migrationBuilder.DeleteData(
                table: "ShoppingCart",
                keyColumn: "ShoppingCartId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ShoppingCart",
                keyColumn: "ShoppingCartId",
                keyValue: 4);

            migrationBuilder.DropColumn(
                name: "Count",
                table: "ShoppingCart");

            migrationBuilder.DropColumn(
                name: "ProductID",
                table: "ShoppingCart");

            migrationBuilder.CreateTable(
                name: "ShoppingCartItem",
                columns: table => new
                {
                    ShoppingCartItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShoppingCartId = table.Column<int>(type: "int", nullable: false),
                    ProductID = table.Column<int>(type: "int", nullable: false),
                    Count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingCartItem", x => x.ShoppingCartItemId);
                    table.ForeignKey(
                        name: "FK_ShoppingCartItem_Product_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Product",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShoppingCartItem_ShoppingCart_ShoppingCartId",
                        column: x => x.ShoppingCartId,
                        principalTable: "ShoppingCart",
                        principalColumn: "ShoppingCartId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "ShoppingCartItem",
                columns: new[] { "ShoppingCartItemId", "Count", "ProductID", "ShoppingCartId" },
                values: new object[,]
                {
                    { 1, 2, 1, 1 },
                    { 2, 1, 2, 1 },
                    { 3, 1, 3, 2 },
                    { 4, 3, 4, 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingCartItem_ProductID",
                table: "ShoppingCartItem",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingCartItem_ShoppingCartId",
                table: "ShoppingCartItem",
                column: "ShoppingCartId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShoppingCartItem");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "ShoppingCart",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProductID",
                table: "ShoppingCart",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "ShoppingCart",
                keyColumn: "ShoppingCartId",
                keyValue: 1,
                columns: new[] { "Count", "ProductID" },
                values: new object[] { 2, 1 });

            migrationBuilder.UpdateData(
                table: "ShoppingCart",
                keyColumn: "ShoppingCartId",
                keyValue: 2,
                columns: new[] { "Count", "ProductID" },
                values: new object[] { 1, 2 });

            migrationBuilder.InsertData(
                table: "ShoppingCart",
                columns: new[] { "ShoppingCartId", "Count", "ProductID", "UserId" },
                values: new object[,]
                {
                    { 3, 1, 3, 3 },
                    { 4, 3, 4, 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingCart_ProductID",
                table: "ShoppingCart",
                column: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_ShoppingCart_Product_ProductID",
                table: "ShoppingCart",
                column: "ProductID",
                principalTable: "Product",
                principalColumn: "ProductID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
