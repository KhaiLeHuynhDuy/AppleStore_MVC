using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Apple.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class ModifyTableUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "ApplicationUser",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "ApplicationUser",
                type: "nvarchar(70)",
                maxLength: 70,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(70)",
                oldMaxLength: 70,
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "ApplicationUser",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ImagesUser",
                table: "ApplicationUser",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte>(
                name: "Sex",
                table: "ApplicationUser",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.UpdateData(
                table: "ApplicationUser",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Active", "ImagesUser", "Sex" },
                values: new object[] { false, null, (byte)0 });

            migrationBuilder.UpdateData(
                table: "ApplicationUser",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "Active", "ImagesUser", "Sex" },
                values: new object[] { false, null, (byte)0 });

            migrationBuilder.UpdateData(
                table: "ApplicationUser",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "Active", "ImagesUser", "Sex" },
                values: new object[] { false, null, (byte)0 });

            migrationBuilder.UpdateData(
                table: "ApplicationUser",
                keyColumn: "UserId",
                keyValue: 4,
                columns: new[] { "Active", "ImagesUser", "Sex" },
                values: new object[] { false, null, (byte)0 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Active",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "ImagesUser",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "Sex",
                table: "ApplicationUser");

            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "ApplicationUser",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "ApplicationUser",
                type: "nvarchar(70)",
                maxLength: 70,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(70)",
                oldMaxLength: 70);
        }
    }
}
