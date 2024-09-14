using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace Apple.Models.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductID { get; set; }

        [Required]
        public string? ProductName { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public double ProductPrice { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }

        public string? ImageURL { get; set; }

        [Timestamp]
        [Required]
        public byte[]? RowVersionProduct { get; set; }
    }
}
