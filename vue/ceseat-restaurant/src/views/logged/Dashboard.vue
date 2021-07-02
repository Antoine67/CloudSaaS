<template>
  <div>
    <v-row>
      <v-col>
        <apexchart type="line" :options="salesOptions" :series="salesSeries"></apexchart>
      </v-col>
      <v-col> 
        <apexchart type="line" :options="earningOptions" :series="earningSeries"></apexchart>
      </v-col >
      </v-row>
      <v-row justify="center">
        <apexchart type="pie" width="380" :options="menuOptions" :series="menuSeries"></apexchart>
      </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrdersService from "@/services/OrdersService"

import { namespace } from "vuex-class";

@Component({
  components: {  }
})
export default class Dashboard extends Vue{

   salesSeries = [{
        name: 'Commandes',
        data: []
      }]

    salesOptions = {
        chart: {
          id: 'sales-graph',
          toolbar: {
            //show: false
          }
        },
        xaxis: {
          categories: ['']
        },
        title: {
          text: "Nombre de commandes par mois"
        }
    }

    earningSeries = [{
        name: 'sales',
        data: [500, 1050, 370, 748, 751, 589]
      }]

    earningOptions = {
        chart: {
          id: 'earning-graph',
          toolbar: {
            //show: false
          }
        },
        xaxis: {
          categories: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]
        },
        title: {
          text: "Revenus par mois"
        }
    }


    menuSeries = [44, 55, 13, 43, 22]
    
    menuOptions = {
      chart: {
        id: 'menus-pie',
        width: 380,
        type: 'pie',
      },
      title: {
          text: "Répartition du nombre de commande"
        },
      labels: ['Menu A', 'Menu B', 'Menu C', 'Menu D', 'Menu E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        },
      }]
    }

    classify(){
      
      let currentDate = new Date()
      currentDate.setMonth(currentDate.getMonth() - 10)

      let dateArray = []
      
      for (let i = 0; i < 9; i++) {
        currentDate.setMonth(currentDate.getMonth() + 1)
        dateArray[new Date(currentDate).getMonth()+1 + "-" + new Date(currentDate).getFullYear()] = 0
      }
      this.orders.forEach(function(currentOrder) {
        //console.log("glag",new Date(currentOrder.date).getMonth());
        const monthYearText = new Date(currentOrder.date).getMonth() + "-" + new Date(currentOrder.date).getFullYear()
        if(monthYearText in dateArray){
            dateArray[monthYearText] = dateArray[monthYearText] + 1
        }
      });

      for (const [key, value] of Object.entries(dateArray)) {
        this.salesSeries[0].data.push(value)
        this.salesOptions.xaxis.categories.push(key.toString())
      }


      this.salesSeries[0].data.push(0)

      dateArray.forEach(function callback(value, index) {
        console.log("test",value)
        this.salesSeries[0].data.push(value)
        this.salesOptions.xaxis.categories.push(index)
      });

      console.log("flag", this.salesSeries[0].data, this.salesOptions.xaxis.categories)
    }


    fetchOrders(){
        OrdersService.getAllPassed()
        .then((response) => {
            this.orders = response.data;
            console.log(response.data);
            this.classify()
        })
        .catch((e) => {
            console.log(e);
        });
    }


    created() {
        this.fetchOrders();
    }

    

    orders = []


}
</script>

<style>
.apexcharts-toolbar {
  z-index:0 !important
}
</style>
