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
        public static Order GetOrder(string id)
        {
            HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format("http://ceseat-api.fr/api/orders/" + id));
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

            Order order = JsonConvert.DeserializeObject<Order>(jsonString);

            return order;
        }

        public static List<Order> GetOrders()
        {
            HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format("http://ceseat-api.fr/api/orders"));
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

            List<Order> order = JsonConvert.DeserializeObject<List<Order>>(jsonString);

            return order;
        }


        /*static async Task RunAsync()
        {
            // Update port # in the following line.
            client.BaseAddress = new Uri("http://ceseat-api.fr/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            try
            {
                Order order = new Order();
                order = await GetOrdersAsync();
                ShowOrders(order);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Console.ReadLine();
        }*/
    }
}
