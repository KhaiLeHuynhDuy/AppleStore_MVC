using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.Models
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }
        [Required]
        [StringLength(50),MinLength(3)]
        public string? CategoryName { get; set; }
        [Range(0, 5)]
        [Required]
        public int DisplayOrder { get; set; }
        [Timestamp]
        public byte[] RowVersion { get; set; }
    }
}
