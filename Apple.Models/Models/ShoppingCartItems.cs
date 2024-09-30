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
    public class ShoppingCartItems
    {
        [Key]
        public int ShoppingCartItemsID { get; set; } // Id cho từng mục trong giỏ hàng
        public int ShoppingCartId { get; set; } // Liên kết đến giỏ hàng
        public int ProductID { get; set; } // Id sản phẩm
        public int Count { get; set; } // Số lượng
        [ForeignKey("ProductID")]
        [ValidateNever]
        public Product Product { get; set; } // Thông tin sản phẩm
                                            
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Thời gian cập nhật mục
        public DateTime? UpdatedAt { get; set; }
    }
}
