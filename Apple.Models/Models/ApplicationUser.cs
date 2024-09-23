using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.Models
{
    public class ApplicationUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required]
        [StringLength(50)]
        public string? Email { get; set; }

        [Required]
        [StringLength(50)]
        public string? UserName { get; set; }

        [Required]
        [StringLength(50)]
        public string? Password { get; set; }
        [Required]
        [StringLength(10)]
        public string? PhoneNumber { get; set; }
        [AllowNull]
        [StringLength(50)]
        public string? Name { get; set; }
        [Required]
        [StringLength(70)]
        public string? Address { get; set; }
        public byte Sex { get; set; }
        public bool Active { get; set; } = false;
        [AllowNull]
        public string? ImagesUser { get; set; }
        public int RoleId { get; set; }  

        [ForeignKey("RoleId")]
        public Role? Roles { get; set; }
    }

}
