﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models.Enums;

namespace YoloSpaceAPI.DTOs
{
    public class PhotoDemoDTO
    {
        public string Url { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
    }
}
