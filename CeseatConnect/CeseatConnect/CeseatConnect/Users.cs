using System;
using System.Collections.Generic;
using System.Text;

namespace CeseatConnect
{
    class Users
    { 
        public int id { get; set; }
        public int age { get; set; }
        public string email { get; set; }
        public string siret { get; set; }
        public string rib { get; set; }
        public string sponsorshipCode { get; set; }
        public bool notification { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public Address address { get; set; }
        public Role role { get; set; }
        public string username { get; set; }
        public string name { get; set; }
        public bool suspended { get; set; }
    }
    class Role
    {
        public int id { get; set; }
        public string identifier { get; set; }
        public string title { get; set; }
    }
    class Address
    {
        public int id { get; set; }
        public string country { get; set; }
        public string town { get; set; }
        public string postalCode { get; set; }
        public string address1 { get; set; }
        public string addresse2 { get; set; }
        public int longitude { get; set; }
        public int latitude { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }

    }
}
