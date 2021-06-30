using System;
using System.Collections.Generic;
using System.Text;

namespace CeseatConnect
{
    class Order
    {
        public string id { get; set; }
        public string date { get; set; }
        public string restaurant_id { get; set; }
        public string customer_id { get; set; }
        public string deliverer_id { get; set; }
        public string status { get; set; }
        //public Pricing[] pricing { get; set; }
        public string delivered { get; set; }
        //public Menus[] menus { get; set; }
    }

    class Pricing
    {
        public bool paid { get; set; }
        public string payment_card_id { get; set; }
        public float comission_fees { get; set; }
        public float restaurant_fees { get; set; }
        public float delivering_fees { get; set; }
        public float discount { get; set; }
        public float total { get; set; }
    }

    class Menus
    {
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public float price { get; set; }
        public Products[] products { get; set; }
    }

    class Products
    {
        public string id { get; set; }
        public string step { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public float price { get; set; }
        public int quantity { get; set; }
        public Ingredients[] ingredients { get; set; }
    }

    class Ingredients
    {
        public string name { get; set; }
    }
}
