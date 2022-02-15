using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using teste.Data;
using teste.Dtos;
using teste.Helpers;
using teste.Model;

namespace teste.Controllers
{
    [Route(template: "api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtServices _jwtServices;

        public AuthController(IUserRepository repository, JwtServices jwtServices)
        {
            _repository = repository;
            _jwtServices = jwtServices;
        }

        [HttpPost(template: "register")]
        public IActionResult Register(RegisterDtos dtos)
        {
            var user = new User
            {
                Name = dtos.Name,
                Email = dtos.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dtos.Password)
            };


            return Created(uri: "success", value: _repository.Create(user));
        }

        [HttpPost(template: "Login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _repository.GetByEmail(dto.Email);

            if (user == null)
            {
                return BadRequest(new { message = "Invalid Email" });
            }
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Password" });
            }
            var jwt = _jwtServices.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(new
            {
                message = "success"
            }

                );


        }
        [HttpGet(template: "user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtServices.Verify(jwt);

                int userId = int.Parse(token.Issuer);
                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch(Exception )
            {
                return Unauthorized();
            }
        }
       
    }
    }
