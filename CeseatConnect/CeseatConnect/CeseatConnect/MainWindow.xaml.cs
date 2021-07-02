using System;
using System.Windows;
using Microsoft.Data.SqlClient;
using System.Configuration;
using System.Data;
using System.Collections.Generic;
using System.Windows.Controls;
using System.Text;
using System.Linq;
using System.Windows.Input;
using System.Windows.Media;

namespace CeseatConnect
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public string token;
        DataGridRow currentRow;
        public MainWindow()
        {
            APIUsers.api = ConfigurationManager.AppSettings.Get("Api");
            APIUsers.apiAuth = ConfigurationManager.AppSettings.Get("ApiAuth");
            ApiOrders.api = ConfigurationManager.AppSettings.Get("Api");
            ApiOrders.apiAuth = ConfigurationManager.AppSettings.Get("ApiAuth");
            ConnexionForm connexionForm = new ConnexionForm(this);
            var result = connexionForm.ShowDialog();          
            if (result == true)
            {
                InitializeComponent();
                WebBrowser.Source = new Uri(ConfigurationManager.AppSettings.Get("ServeurMonitoring"));
            }
            else
            {
                this.Close();
            }
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
                    Status.Content = @"Votre ID contient un espace, veuillez le supprimer.";
                    Status.Foreground = Brushes.Red;
                    Price.Content = "";
                }
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
        private void DataGrid_Initialized(object sender, EventArgs e)
        {

            refreshDataGrid();
            
        }

        private void refreshDataGrid()
        {
            var users = APIUsers.GetUsers(token).ToArray();
            var roles = APIUsers.GetRoles(token).ToArray();

            for (int i = 0; i < users.Length; i++)
            {
                for (int j = 0; j < roles.Length; j++)
                {
                    if (users[i].id == roles[j].id)
                    {
                        users[i].identifier = roles[j].identifier;
                        users[i].title = roles[j].title;
                    }
                }
            }
            DataGrid.ItemsSource = users;
        }
        private void DataGrid_CellEditEnding(object sender, System.Windows.Controls.DataGridCellEditEndingEventArgs e)
        {
            DataGridRow row = e.Row;
            int row_index = ((DataGrid)sender).ItemContainerGenerator.IndexFromContainer(row);
            
            var id = (Users)DataGrid.Items[row_index];
            
            string columnName = e.Column.Header.ToString();
            string cellValue = "";
           
            if (e.EditingElement is TextBox)
            {
                DataGridCell myCell = new DataGridCell();
                TextBox t = e.EditingElement as TextBox;
                
                cellValue = t.Text.ToString();
            }
            else if (e.EditingElement is CheckBox)
            {
                CheckBox t = e.EditingElement as CheckBox;
                cellValue = t.IsChecked.ToString();
            }
            

            if (columnName != "title")
            {
                string postData = columnName + "=" + cellValue;
                ASCIIEncoding encoding = new ASCIIEncoding();
                byte[] putValue = encoding.GetBytes(postData);    
                var response = APIUsers.PutUsers(token, id.id.ToString(), putValue);
            }
            else
            {

                var roles = APIUsers.GetRoles(token).ToArray();
                for (int i = 0; i < roles.Length; i++)
                {
                    if (roles[i].title == cellValue)
                    {
                        cellValue = roles[i].id.ToString();
                    }
                }
                string postData =  "roleId=" + cellValue;
                ASCIIEncoding encoding = new ASCIIEncoding();
                byte[] putValue = encoding.GetBytes(postData);
                var response = APIUsers.PutUsers(token, id.id.ToString(), putValue);
            }
            
        }

        private void DataGrid_LoadingRow(object sender, DataGridRowEventArgs e)
        {
            DataGrid.Columns[3].Visibility = Visibility.Hidden;
            DataGrid.Columns[4].Visibility = Visibility.Hidden;
            DataGrid.Columns[5].Visibility = Visibility.Hidden;
            DataGrid.Columns[9].Visibility = Visibility.Hidden;
            DataGrid.Columns[10].Visibility = Visibility.Hidden;
            DataGrid.Columns[15].Visibility = Visibility.Hidden;

        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {

            var user = new List<KeyValuePair<string, string>>();
            user.Add(new KeyValuePair<string, string>("email", email.Text));
            user.Add(new KeyValuePair<string, string>("password", password.Password));
            user.Add(new KeyValuePair<string, string>("username", username.Text));
            user.Add(new KeyValuePair<string, string>("roleIdentifier", roleIdentifier.Text));
            user.Add(new KeyValuePair<string, string>("name", name.Text));
            user.Add(new KeyValuePair<string, string>("surname", surname.Text));
            var response = APIUsers.RegisterUsersAsync(user);
            if (response.IsCompletedSuccessfully)
            {
                MessageBox.Show("Utilisateur ajouté dans la base de donnée", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            /*else
            {
                MessageBox.Show("Problème lors de l'ajout, veuillez réessayer", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }*/
            refreshDataGrid();
        }

        private void RemoveUser_Click(object sender, RoutedEventArgs e)
        {
            //DataGridRow row = ;
            int row_index = currentRow.GetIndex();
            if(row_index != 0)
            {
            var user = (Users)DataGrid.Items[row_index];
            var response = APIUsers.DeleteUser(token, user.id);
            }
            refreshDataGrid();
        }

        private void DataGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var dg = sender as DataGrid;
            if (dg == null) return;
            var index = dg.SelectedIndex;
            //here we get the actual row at selected index
            currentRow = dg.ItemContainerGenerator.ContainerFromIndex(index) as DataGridRow;
            
            //here we get the actual data item behind the selected row
            //var item = dg.ItemContainerGenerator.ItemFromContainer(currentRow);
        }
    }
    public class OrderData
    {
        public string id { get; set; }

        public string status { get; set; }

        public string price { get; set; }
    }
}