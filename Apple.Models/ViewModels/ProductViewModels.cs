﻿using Apple.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Models.ViewModels
{
    public class ProductViewModels
    {
        public IEnumerable<Product> ?Products { get; set; }
        public IEnumerable<Category>? Categories { get; set;}
    }
}
