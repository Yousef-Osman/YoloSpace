using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;
using YoloSpaceAPI.Models.Data;
using YoloSpaceAPI.Repositories.Interfaces;
using Z.EntityFramework.Plus;

namespace YoloSpaceAPI.Repositories
{
    public class UserRepository : GenericRepository<ApplicationUser>, IUserRepository
    {
        public UserRepository(ApplicationDbContext context) : base(context) { }

        public async Task<ApplicationUser> GetUserAndPhotoAsync(int id)
        {
            return await _context.Users.Include(a => a.Photos).FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<IEnumerable<ApplicationUser>> GetUsersAndPhotosAsync()
        {
            return await _context.Users.IncludeFilter(a => a.Photos.Where(b => b.IsMain == true)).ToListAsync();
        }
    }
}
