using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace CeseatConnect
{
    class ApiOrders
    {
        public static Order GetOrder(string id, string token)
        {
            HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format("http://ceseat-api.fr/api/orders/" + id));
            WebReq.PreAuthenticate = true;
            WebReq.Headers.Add("x-access-token", token);
            WebReq.Method = "GET";
            HttpWebResponse WebResp = (HttpWebResponse)WebReq.GetResponse();

            Console.WriteLine(WebResp.StatusCode);
            Console.WriteLine(WebResp.Server);

            Order order = null;

            string jsonString;
            using (Stream stream = WebResp.GetResponseStream())   //modified from your code since the using statement disposes the stream automatically when done
            {
                StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                jsonString = reader.ReadToEnd();
            }
            Console.WriteLine(jsonString);
            order = (JsonConvert.DeserializeObject<Order>(jsonString)) != null ? JsonConvert.DeserializeObject<Order>(jsonString) : null;

            return order;
        }

        public static List<Order> GetOrders(string token)
        {
            HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format("http://ceseat-api.fr/api/orders"));
            WebReq.PreAuthenticate = true;
            WebReq.Headers.Add("x-access-token", token);
            WebReq.Method = "GET";
            HttpWebResponse WebResp = (HttpWebResponse)WebReq.GetResponse();

            Console.WriteLine(WebResp.StatusCode);
            Console.WriteLine(WebResp.Server);

            string jsonString;
            using (Stream stream = WebResp.GetResponseStream())   //modified from your code since the using statement disposes the stream automatically when done
            {
                StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                jsonString = reader.ReadToEnd();
            }
            List<Order> order = (JsonConvert.DeserializeObject<List<Order>>(jsonString)) != null ? JsonConvert.DeserializeObject<List<Order>>(jsonString) : null;

            return order;
        }
    }
}