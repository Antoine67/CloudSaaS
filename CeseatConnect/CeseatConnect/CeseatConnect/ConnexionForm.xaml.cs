using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;


namespace CeseatConnect
{
    /// <summary>
    /// Logique d'interaction pour RegisterForm.xaml
    /// </summary>
    public partial class ConnexionForm : Window
    {
        MainWindow mainWindow;
        private bool connected;
        public ConnexionForm(MainWindow window)
        {
            InitializeComponent();
            mainWindow = window;
        }

        private void OkButtonRegistration_Click(object sender, RoutedEventArgs e)
        {
            if (passwordTextBox.Password == confirmpasswordTextBox.Password)
            {
                if (usernameTextBox.Text != "" || passwordTextBox.Password != "" || confirmpasswordTextBox.Password != "" || emailTextBox.Text != "" || nameTextBox.Text != "" || surnameTextBox.Text != "")
                {
                    var user = new List<KeyValuePair<string, string>>();
                    user.Add(new KeyValuePair<string, string>("email", emailTextBox.Text));
                    user.Add(new KeyValuePair<string, string>("password", passwordTextBox.Password));
                    user.Add(new KeyValuePair<string, string>("username", usernameTextBox.Text));
                    user.Add(new KeyValuePair<string, string>("roleIdentifier", "ceseat-technic"));
                    user.Add(new KeyValuePair<string, string>("name", nameTextBox.Text));
                    user.Add(new KeyValuePair<string, string>("surname", surnameTextBox.Text));

                    var response = APIUsers.RegisterUsersAsync(user);
                    if (response.IsCompletedSuccessfully)
                    {
                        MessageBox.Show("Vous vous êtes bien enregistré", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                    }
                    /*else
                    {
                        MessageBox.Show("Problème au niveau de l'enregistrement veuillez réessayer", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }*/
                }
            }
        }
        private void CancelButtonRegistration_Click(object sender, RoutedEventArgs e)
        {

        }
        private void OkButtonLogin_Click(object sender, RoutedEventArgs e)
        {
            if (passwordTextBox != null && emailTextBox != null)
            {
                 var user = new List<KeyValuePair<string, string>>();
                 user.Add(new KeyValuePair<string, string>("email",emailTextBoxlogin.Text));
                user.Add(new KeyValuePair<string, string>("password", passwordTextBoxlogin.Password));
                user.Add(new KeyValuePair<string, string>("roleIdentifier", "ceseat-technic"));

                var response = APIUsers.LoginUsers(user).Result;
                if (response != "")
                {
                    response = response.Split('"')[3];
                    if (response != "Invalid user")
                    {
                        MessageBox.Show("Vous êtes bien connecté", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                        mainWindow.token = response;
                        connected = true;
                        this.DialogResult = true;
                        this.Close();
                    }
                    else
                    {
                        MessageBox.Show("Erreur de connection veuillez réessayer", "error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
     
            }
        }

        private void CancelButtonLogin_Click(object sender, RoutedEventArgs e)
        {

        }
        void Window_Closing(object sender, CancelEventArgs e)
        {
            if (!connected)
            {
                this.DialogResult = false;
            }
            
        }
    }
}
