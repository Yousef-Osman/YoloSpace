using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;
using YoloSpaceAPI.Models.Data;
using YoloSpaceAPI.Repositories.Interfaces;

namespace YoloSpaceAPI.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            AuthRepository = new AuthRepository(_context);
            UserRepository = new UserRepository(_context);
        }

        public IAuthRepository AuthRepository { get; set; }
        public IUserRepository UserRepository { get; set; }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
