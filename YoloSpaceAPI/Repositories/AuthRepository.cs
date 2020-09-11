using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;
using YoloSpaceAPI.Models.Data;

namespace YoloSpaceAPI.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ApplicationDbContext _context;

        public AuthRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<ApplicationUser> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(a => a.Username == username);
            if (user == null) return null;

            var correct = VarifyPasswordHash(password, user.PasswordHash, user.PasswordSalt);
            if (!correct) return null;

            return user;
        }

        private bool VarifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var newPasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                for (int i = 0; i < passwordHash.Length; i++)
                {
                    if (passwordHash[i] != newPasswordHash[i])
                        return false;
                }
            }

            return true;
        }

        public async Task<ApplicationUser> Register(ApplicationUser user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            var exists = await _context.Users.AnyAsync(a => a.Username == username);
            return (exists == true) ? true : false;
        }
    }
}
