using Apple.DataAccess.Data;
using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Apple.Domain.Repository
{
    public class ApplicationUserRepository : Repository<ApplicationUser>, IApplicationUserRepository
    {
        private readonly AppleStoreDbContext _context;
       
        public ApplicationUserRepository(AppleStoreDbContext context) : base(context)
        {
            _context = context;
            
        }

        public Task<ApplicationUser?> FindUserByUserName(string username)
        {
            return _context.ApplicationUsers.FirstOrDefaultAsync(x => x.UserName == username);
        }

        public IQueryable<ApplicationUser> GetAllApplicationUsers()
        {
            return _context.ApplicationUsers.Include(u => u.Roles);
        }

        public async Task<ApplicationUser?> GetApplicationUserById(int id)
        {
            return await _context.ApplicationUsers.Where(u => u.UserId == id).FirstOrDefaultAsync();
        }

        public async Task<ApplicationUser?> GetApplicationUserByRole(string rolename)
        {
            return await _context.ApplicationUsers
                .Include(u => u.Roles)
                .Where(u => u.Roles != null && u.Roles.RoleName == rolename)
                .FirstOrDefaultAsync();
        }

       
    }
}
