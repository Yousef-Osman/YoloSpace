using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace YoloSpaceAPI.Models.Data
{
    public class Seed
    {
        public static void SeedUsers(ApplicationDbContext context)
        {
            if (!context.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Models/Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<ApplicationUser>>(userData);

                foreach (var user in users)
                {
                    var password = "123456";
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash(password, out passwordHash, out passwordSalt);

                    user.Username = user.Username.ToLower();
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;

                    context.Add(user);
                }

                context.SaveChanges();
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
