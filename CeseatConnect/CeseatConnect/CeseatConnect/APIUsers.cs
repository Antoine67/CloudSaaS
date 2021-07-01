using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace CeseatConnect
{
    class APIUsers
    {

        static HttpClient client = new HttpClient();
   
        public static async Task<HttpResponseMessage> RegisterUsersAsync(List<KeyValuePair<string, string>> user)
        {
            HttpClient clientAuth = new HttpClient();
            HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Post, "http://localhost:5000/api/auth/register") { Content = new FormUrlEncodedContent(user) };
            HttpResponseMessage res = await clientAuth.SendAsync(req);
            return res;
        }

        public static HttpWebResponse LoginUsers(byte[] user)
        {
            var request = (HttpWebRequest)WebRequest.Create("http://localhost:5000/api/auth/login");

            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = user.Length;

            using (var stream = request.GetRequestStream())
            {
                stream.Write(user, 0, user.Length);
            }

            var response = (HttpWebResponse)request.GetResponse();

            //var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
            return response;

        }
        public static List<Users> GetUsers()
        {
            HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format("http://ceseat-api.fr/api/users"));
            WebReq.Method = "GET";
            HttpWebResponse WebResp = (HttpWebResponse)WebReq.GetResponse();

            Console.WriteLine(WebResp.StatusCode);
            Console.WriteLine(WebResp.Server);

            string jsonString;
            using (Stream stream = WebResp.GetResponseStream())
            {
                StreamReader reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                jsonString = reader.ReadToEnd();
            }

            List<Users> users = JsonConvert.DeserializeObject<List<Users>>(jsonString);

            return users;
        }

        static async Task<Users> UpdateProductAsync(Users users)
        {
            HttpResponseMessage response = await client.PutAsJsonAsync(
                $"api/users/{users.id}", users);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            users = await response.Content.ReadAsAsync<Users>();
            return users;
        }

        static async Task<HttpStatusCode> DeleteProductAsync(string id)
        {
            HttpResponseMessage response = await client.DeleteAsync(
                $"api/users/{id}");
            return response.StatusCode;
        }

       
    }
}

