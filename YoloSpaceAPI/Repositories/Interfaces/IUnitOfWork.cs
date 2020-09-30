using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoloSpaceAPI.Models;
using YoloSpaceAPI.Repositories.Interfaces;

namespace YoloSpaceAPI.Repositories.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IAuthRepository AuthRepository { get; }
        IUserRepository UserRepository { get; }
        Task SaveAsync();
    }
}
