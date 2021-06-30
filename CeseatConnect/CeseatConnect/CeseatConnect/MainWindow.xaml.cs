using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace CeseatConnect
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
          //  RunAsync().GetAwaiter().GetResult();
        }
        static HttpClient client = new HttpClient();

        static void ShowUsers(Users users)
        {
            Console.WriteLine(users.Name);
        }

        static async Task<Uri> CreateProductAsync(Object user)
        {
            HttpClient authclient = new HttpClient();
            client.BaseAddress = new Uri("http://localhost:4000/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
            

            HttpResponseMessage response = await authclient.PostAsJsonAsync(
                "api/auth/register", user);
            response.EnsureSuccessStatusCode();

            // return URI of the created resource.
            return response.Headers.Location;
        }

        static async Task<Users> GetUsersAsync()
        {
            Users users = null;
            HttpResponseMessage response = await client.GetAsync(
                $"api/users");
            if (response.IsSuccessStatusCode)
            {
                users = await response.Content.ReadAsAsync<Users>();
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

                Object user = new object();
                var url = await CreateProductAsync(user);
            
        

                // Get the product
                users = await GetUsersAsync();
                ShowUsers(users);

                // Update the product
                Console.WriteLine("Updating price...");
                users.Suspended = false;
                await UpdateProductAsync(users);

                // Get the updated product
                users = await GetUsersAsync();
                ShowUsers(users);

                // Delete the product
                var statusCode = await DeleteProductAsync("1");
                Console.WriteLine($"Deleted (HTTP Status = {(int)statusCode})");

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Console.ReadLine();
        }


        private void loginButton_Click(object sender, RoutedEventArgs e)
        {

        }

        private void registerButton_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
