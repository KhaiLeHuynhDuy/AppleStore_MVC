using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.Models
{
    public class UserAdmin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserAdminId { get; set; }
        [Required]
        [StringLength(50)]
        public string? UserName { get; set; }
        [Required]
        [StringLength(50)]
        public string? Password { get; set; }
        public int RoleId { get; set; }

        [ForeignKey("RoleId")]
        public Role? Roles { get; set; }
    }
}
