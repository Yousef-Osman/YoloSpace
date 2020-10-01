using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.DTOs;
using YoloSpaceAPI.Models;

namespace YoloSpaceAPI.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<ApplicationUser, UserDemoDTO>()
                .ForMember(dest => dest.PhotoUrl, options =>
                     options.MapFrom(src => src.Photos.FirstOrDefault(a => a.IsMain == true).Url))
                 .ForMember(dest => dest.Age, options =>
                     options.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<ApplicationUser, UserDetailsDTO>()
                .ForMember(dest => dest.PhotoUrl, options =>
                     options.MapFrom(src => src.Photos.FirstOrDefault(a => a.IsMain == true).Url))
                 .ForMember(dest => dest.Age, options =>
                     options.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotoDemoDTO>();
               
        }
    }
}
