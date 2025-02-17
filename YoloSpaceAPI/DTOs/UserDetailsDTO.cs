﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;
using YoloSpaceAPI.Models.Enums;

namespace YoloSpaceAPI.DTOs
{
    public class UserDetailsDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender? Gender { get; set; }
        public int? Age { get; set; }
        public DateTime? LastActive { get; set; }
        public DateTime? DateCreated { get; set; }
        public string KnownAs { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<PhotoDemoDTO> Photos { get; set; }
    }
}
