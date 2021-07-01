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
            if(id_order != "")
            {
                var order = ApiOrders.GetOrder(id_order);

                switch (order.status)
                {
                    case "WAITING_PAYMENT":
                        Status.Content = "Etat : En attente de payement.";
                        break;
                    case "WAITING_VALIDATION":
                        Status.Content = "Etat : En attente de validation.";
                        break;
                    case "IN_PREPARATION":
                        Status.Content = "Etat : En cours de préparation.";
                        break;
                    case "WAITING_DELIVERER":
                        Status.Content = "Etat : En attente du livreur.";
                        break;
                    case "DELIVERY_IN_PROGRESS":
                        Status.Content = "Etat : Livraison en cours.";
                        break;
                    case "ORDER_DELIVERED":
                        Status.Content = "Etat : Commande délivrée.";
                        break;
                    case "ORDER_CANCELLED_CLIENT":
                        Status.Content = "Etat : Commande annulé par le client.";
                        break;
                    case "ORDER_CANCELLED_RESTAURANT":
                        Status.Content = "Etat : Commande annulé par le restaurant.";
                        break;
                    default:
                        Status.Content = "Aucun état n'est disponible";
                        break;
                }

                Price.Content = "Prix total : " + order.pricing.total + "€";
            }

           

            
            //PassationCommande.Content = order.status;
            //PassationCommande.Content = ordering;
        }

        private void GetAllOrders(object sender, RoutedEventArgs e)
        {
            var order = ApiOrders.GetOrders();
            TotalOrders.Content = order.Count;
            List<OrderData> ordersData = new List<OrderData>() ;

            for (int i = 0; i < order.Count; i++)
            {
                ordersData.Add(new OrderData() { id = order[i].id, status = order[i].status, price = order[i].pricing.total + " €"});
            }
            EveryOrders.ItemsSource = ordersData;

            //NbWaitingPayment.Content ="";
        }
    }


    public class OrderData
    {
        public string id { get; set; }

        public string status { get; set; }

        public string price { get; set; }
    }
}
