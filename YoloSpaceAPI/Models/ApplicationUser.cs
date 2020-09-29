using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models.Enums;

namespace YoloSpaceAPI.Models
{
    public class ApplicationUser: BaseModel
    {
        [Required]
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public Gender? Gender { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public DateTime? LastActive { get; set; }
        public string KnownAs { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
