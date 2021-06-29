using System;
using System.Collections.Generic;
using System.Text;

namespace CeseatConnect
{
    class Users
    {
        public int Id { get; set; }
        public Role[] Role { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public bool Suspended { get; set; }
    }
    class Role
    {
        public int Id { get; set; }
        public string[] Function { get; set; }
        public int Identifier { get; set; }
        public int Title { get; set; }
    }
}
