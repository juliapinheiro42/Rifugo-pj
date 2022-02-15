using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using teste.Model;

namespace teste.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _context;
        public UserRepository(UserContext context) {
            _context = context;
        }
        public User Create(User user)
        {
            _context.Users.Add(user);
            user.Id = _context.SaveChanges();

            return user;
        }
        public User GetByEmail(string Email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == Email);
        }

        public User GetById(int Id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == Id);
        }
    }
}
