using System;
using System.Collections.Generic;
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

        public static async Task<HttpResponseMessage> LoginUsersAsync(List<KeyValuePair<string, string>> user)
        {
            HttpClient clientAuth = new HttpClient();
            HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Post, "http://localhost:5000/api/auth/login") { Content = new FormUrlEncodedContent(user) };
            HttpResponseMessage res = await clientAuth.SendAsync(req);
            return res;
        }
        public static async Task<Users> GetUsersAsync()
        {
            Users users = null;
            HttpClient clientAuth = new HttpClient();
            HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Get, "http://ceseat-api.fr/api/users");
            HttpResponseMessage res = await clientAuth.SendAsync(req);
            if (res.IsSuccessStatusCode)
            {
                users = await res.Content.ReadAsAsync<Users>();
            }
            return users;
        }

        static async Task<Users> UpdateProductAsync(Users users)
        {
            HttpResponseMessage response = await client.PutAsJsonAsync(
                $"api/users/{users.Id}", users);
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

        static async Task RunAsync()
        {
            // Update port # in the following line.
            client.BaseAddress = new Uri("http://ceseat-api.fr/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            try
            {
                // Create a new product
                Users users;

                
                //var url = await CreateUsersAsync(user);



                // Get the product
                users = await GetUsersAsync();


                // Update the product
                Console.WriteLine("Updating price...");
                users.Suspended = false;
                await UpdateProductAsync(users);

                // Get the updated product
                users = await GetUsersAsync();

                // Delete the product
                var statusCode = await DeleteProductAsync("1");
                Console.WriteLine($"Deleted (HTTP Status = {(int)statusCode})");

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }   
    }
}

