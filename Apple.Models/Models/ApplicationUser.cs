using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public string NameOfUser { get; set; }
        [Required]
        public string District { get; set; }
    }
}
