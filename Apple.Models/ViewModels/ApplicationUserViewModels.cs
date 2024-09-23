using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.ViewModels
{
    public class ApplicationUserViewModels
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Username is required.")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters long.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Phone number is required.")]
        [StringLength(10, ErrorMessage = "Phone number must be 10 characters long.")]
        public string PhoneNumber { get; set; }

        public string? Name { get; set; }

        [Required(ErrorMessage = "Address is required.")]
        public string Address { get; set; }

        public byte Sex { get; set; }

        //public bool Active { get; set; }

        public string? ImagesUser { get; set; }

        public int RoleId { get; set; }

        public string? RoleName { get; set; } // Để hiển thị tên vai trò
    }

}
