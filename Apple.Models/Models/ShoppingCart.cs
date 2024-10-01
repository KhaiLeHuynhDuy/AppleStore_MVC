using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.Models
{
    public class ShoppingCart
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ShoppingCartId { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser? ApplicationUser { get; set; }
        public List<ShoppingCartItems> ShoppingCartItems { get; set; } = new List<ShoppingCartItems>(); // Danh sách sản phẩm trong giỏ hàng
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime ExpirationDate { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int TotalItemCount => ShoppingCartItems.Sum(item => item.Count);




    }
}
