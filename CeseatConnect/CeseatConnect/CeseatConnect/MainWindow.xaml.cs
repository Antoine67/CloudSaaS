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
            ConnexionForm connexionForm = new ConnexionForm(this);
            var result = connexionForm.ShowDialog();          
            if (result == true)
            {
                InitializeComponent();
            }
            else
            {
                this.Close();
            }
        }
        private void loginButton_Click(object sender, RoutedEventArgs e)
        {
            
        }

        private void registerButton_Click(object sender, RoutedEventArgs e)
        {
           
        }
    }   
}
