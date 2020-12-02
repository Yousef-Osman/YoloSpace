using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YoloSpaceAPI.DTOs;
using YoloSpaceAPI.Helpers;
using YoloSpaceAPI.Repositories;
using YoloSpaceAPI.Repositories.Interfaces;

namespace YoloSpaceAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UsersController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _unitOfWork.UserRepository.GetUsersAndPhotosAsync();
            var mappedUsers = _mapper.Map<IEnumerable<UserDemoDTO>>(users);

            return Ok(mappedUsers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _unitOfWork.UserRepository.GetUserAndPhotoAsync(id);
            var mappedUser = _mapper.Map<UserDetailsDTO>(user);

            return Ok(mappedUser);
        }
    }
}
