using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YoloSpaceAPI.Helpers
{
    public static class Extensions
    {
        public static int CalculateAge(this DateTime? startDate)
        {
            if(startDate != null)
            {
                var age = DateTime.Now.Year - startDate.Value.Year;

                if (startDate.Value.AddYears(age) > DateTime.Now)
                    age--;

                return age;
            }

            return 0;
        }
    }
}
