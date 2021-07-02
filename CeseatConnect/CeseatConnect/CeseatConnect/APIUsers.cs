using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Collections.Specialized;

namespace CeseatConnect
{
    class APIUsers
    {

        static HttpClient client = new HttpClient();
        public static String api;
        public static String apiAuth;
        public static async Task<HttpResponseMessage> RegisterUsersAsync(List<KeyValuePair<string, string>> user)
        {
            try
            {
                HttpClient clientAuth = new HttpClient();
                HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Post, apiAuth + "api/auth/register") { Content = new FormUrlEncodedContent(user) };
                HttpResponseMessage res = await clientAuth.SendAsync(req);
                return res;
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                throw;
            }
            
        }

        public static async Task<string> LoginUsers(List<KeyValuePair<string, string>> user)
        {
            string token;
            try
            {
                HttpClient clientAuth = new HttpClient();
                HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Post, apiAuth + "api/auth/login") { Content = new FormUrlEncodedContent(user) };
                HttpResponseMessage res = await clientAuth.SendAsync(req).ConfigureAwait(false);
                token = await res.Content.ReadAsStringAsync();
            }
            catch (Exception e )
            {
                MessageBox.Show(e.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                throw;
            }
            return token;
        }
        public static List<Users> GetUsers(string token)
        {
            try
            {
                HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format(api + "api/users"));
                WebReq.Method = "GET";
                WebReq.PreAuthenticate = true;
                WebReq.Headers.Add("x-access-token", token);
                WebReq.Accept = "application/json";
                HttpWebResponse WebResp = (HttpWebResponse)WebReq.GetResponse();

                string jsonString;
                using (Stream stream = WebResp.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                    jsonString = reader.ReadToEnd();
                }

                List<Users> users = JsonConvert.DeserializeObject<List<Users>>(jsonString);

                return users;
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);

                throw;
            }

        }
        public static List<Role> GetRoles(string token)
        {
            try
            {
                HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format(api + "api /roles"));
                WebReq.Method = "GET";
                WebReq.PreAuthenticate = true;
                WebReq.Headers.Add("x-access-token", token);
                WebReq.Accept = "application/json";
                HttpWebResponse WebResp = (HttpWebResponse)WebReq.GetResponse();

                string jsonString;
                using (Stream stream = WebResp.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                    jsonString = reader.ReadToEnd();
                }

                List<Role> roles = JsonConvert.DeserializeObject<List<Role>>(jsonString);

                return roles;
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                throw;
            }
            
        }
        public static HttpWebResponse PutUsers(string token, string id, byte[] users)
        {
            try
            {
                HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format(api + "api/users/" + id));
                WebReq.Method = "PUT";
                WebReq.PreAuthenticate = true;
                WebReq.Headers.Add("x-access-token", token);
                WebReq.ContentType = "application/x-www-form-urlencoded";

                using (var requestStream = WebReq.GetRequestStream())
                {
                    requestStream.Write(users, 0, users.Length);
                }
                var response = (HttpWebResponse)WebReq.GetResponse();


                return response;
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                throw;
            }
            
        }

        public static HttpWebResponse DeleteUser(string token,int id)
        {
            try
            {
                HttpWebRequest WebReq = (HttpWebRequest)WebRequest.Create(string.Format(api + "api/users/" + id.ToString()));
                WebReq.Method = "DELETE";
                WebReq.PreAuthenticate = true;
                WebReq.Headers.Add("x-access-token", token);

                var response = (HttpWebResponse)WebReq.GetResponse();

                return response;
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                throw;
            }
            
        }

       
    }
}

