using Apple.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apple.Domain.Repository.IRepository
{
    public interface IApplicationUserRepository:IRepository<ApplicationUser>
    {
        IQueryable<ApplicationUser> GetAllApplicationUsers();
        Task<ApplicationUser?> GetApplicationUserById(int id);
        Task<ApplicationUser?> GetApplicationUserByRole(string rolename);
        

    }
}
