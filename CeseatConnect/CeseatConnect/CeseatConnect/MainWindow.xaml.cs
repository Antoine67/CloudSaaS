using System;
using System.Windows;
using Microsoft.Data.SqlClient;
using System.Configuration;
using System.Data;
using System.Collections.Generic;
using System.Windows.Media;

namespace CeseatConnect
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public string token;
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

        private void TabItem_GotFocus(object sender, RoutedEventArgs e)
        {
            //var res = APIUsers.GetUsers();
            //DataGrid.ItemsSource = res;
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var id_order = ID_Order.Text;
            //Order[] order = null;
            if (id_order != "" && !id_order.Contains(" "))
            {

                var order = ApiOrders.GetOrder(id_order, token);

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
            else
            {
                Status.Content = @"Votre ID contient un espace, 
veuillez le supprimer.";
                Status.Foreground = Brushes.Red;
                Price.Content = "";
            }




            //PassationCommande.Content = order.status;
            //PassationCommande.Content = ordering;
        }

        private void GetAllOrders(object sender, RoutedEventArgs e)
        {
            var order = ApiOrders.GetOrders(token);
            TotalOrders.Content = order.Count;
            List<OrderData> ordersData = new List<OrderData>();

            for (int i = 0; i < order.Count; i++)
            {
                ordersData.Add(new OrderData() { id = order[i].id, status = order[i].status, price = order[i].pricing.total + " €" });
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