using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Utility.Helpers
{
    public class PasswordHasher
    {
        
        public static (string hashedPassword, string salt) HashPassword(string password)
        {
            // Tạo một salt ngẫu nhiên
            byte[] salt = RandomNumberGenerator.GetBytes(128 / 8); // 128 bits = 16 bytes
           
            // Băm mật khẩu với salt
            string hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8)); // 256 bits = 32 bytes

            // Trả về mật khẩu đã băm và salt dưới dạng chuỗi Base64
            return (hashedPassword, Convert.ToBase64String(salt));
        }
        public static string HashPasswordWithSalt(string password, string salt)
        {
            // Chuyển đổi salt từ chuỗi Base64 về dạng byte[]
            byte[] saltBytes = Convert.FromBase64String(salt);

            // Băm mật khẩu với salt
            string hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: saltBytes,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8)); // 256 bits = 32 bytes

            return hashedPassword;
        }

    }
}
