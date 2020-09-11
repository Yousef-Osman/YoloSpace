using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;

namespace YoloSpaceAPI.Repositories
{
    public interface IAuthRepository
    {
        Task<ApplicationUser> Register(ApplicationUser user, string password);
        Task<ApplicationUser> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
