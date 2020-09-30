using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;

namespace YoloSpaceAPI.Repositories.Interfaces
{
    public interface IUserRepository : IGenericRepository<ApplicationUser>
    {
        Task<IEnumerable<ApplicationUser>> GetUsersAndPhotosAsync();
        Task<ApplicationUser> GetUserAndPhotoAsync(int id);
    }
}
