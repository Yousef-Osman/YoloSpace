using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;
using YoloSpaceAPI.Models.Data;
using YoloSpaceAPI.Repositories.Interfaces;

namespace YoloSpaceAPI.Repositories
{
    public class UserRepository : GenericRepository<ApplicationUser>, IUserRepository
    {
        public UserRepository(ApplicationDbContext context) : base(context) { }

        public async Task<ApplicationUser> GetUserAndPhotoAsync(int id)
        {
            //return await _context.Users.Include(a => a.Photos.FirstOrDefault(b => b.IsMain == true)).FirstOrDefaultAsync(a => a.Id == id);
            return await _context.Users.FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<IEnumerable<ApplicationUser>> GetUsersAndPhotosAsync()
        {
            //return await _context.Users.Include(a => a.Photos.FirstOrDefault(b => b.IsMain == true)).ToListAsync();
            return await _context.Users.ToListAsync();
        }
    }
}
