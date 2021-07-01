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

        public static async Task<string> LoginUsers(List<KeyValuePair<string, string>> user)
        {
            string token;
            try
            {
                HttpClient clientAuth = new HttpClient();
                HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Post, "http://localhost:5000/api/auth/login") { Content = new FormUrlEncodedContent(user) };
                HttpResponseMessage res = await clientAuth.SendAsync(req).ConfigureAwait(false);
                token = await res.Content.ReadAsStringAsync();
            }
            catch (Exception)
            {
                throw;
            }
            return token;
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

