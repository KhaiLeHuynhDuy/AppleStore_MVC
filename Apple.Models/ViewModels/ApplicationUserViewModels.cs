using Apple.Models.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Permissions;

namespace Apple.Models.ViewModels
{
    public class ApplicationUserViewModels
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required(ErrorMessage = "Tên là bắt buộc.")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Email là bắt buộc.")]
        [EmailAddress(ErrorMessage = "Địa chỉ Email không hợp lệ.")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Tên đăng nhập là bắt buộc.")]
        public string? UserName { get; set; }

        [Required(ErrorMessage = "Mật khẩu là bắt buộc.")]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Mật khẩu phải ít nhất 6 ký tự.")]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Giới tính là bắt buộc.")]
        public byte Sex { get; set; }

        public int RoleId { get; set; }

        [ForeignKey("RoleId")]
        public Role? Roles { get; set; }

    }
}
