using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YoloSpaceAPI.Models
{
    public class BaseModel
    {
        public BaseModel()
        {
            DateCreated = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo
                .FindSystemTimeZoneById("Egypt Standard Time"));
            IsDeleted = false;
        }

        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateDeleted { get; set; }
        public bool IsDeleted { get; set; }
    }
}
