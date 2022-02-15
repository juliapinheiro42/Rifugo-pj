using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using teste.Model;

namespace teste.Data
{
   public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string Email);

        User GetById(int Id);
    }
}
