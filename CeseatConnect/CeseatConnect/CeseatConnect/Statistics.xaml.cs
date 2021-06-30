using System;
using System.Collections.Generic;
using System.Text;
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
    /// Logique d'interaction pour Page1.xaml
    /// </summary>
    public partial class Page1 : Page
    {
        public Page1()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var id_order = ID_Order.Text;
            //Order[] order = null;
            var order = ApiOrders.GetOrder(id_order);
            PassationCommande.Content = order.status;
            //PassationCommande.Content = ordering;
        }

        private void GetAllOrders(object sender, RoutedEventArgs e)
        {
            var order = ApiOrders.GetOrders();
            all.Content = order;
        }



    }
}
