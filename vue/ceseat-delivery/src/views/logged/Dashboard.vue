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

import { namespace } from "vuex-class";

@Component({
  components: {  }
})
export default class Dashboard extends Vue{

   salesSeries = [{
        name: 'Livraisons',
        data: [30, 40, 45, 50, 49, 60]
      }]

    salesOptions = {
        chart: {
          id: 'deliveries-graph',
          toolbar: {
            //show: false
          }
        },
        xaxis: {
          categories: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]
        },
        title: {
          text: "Nombre de commandes par mois"
        }
    }

    earningSeries = [{
        name: 'Revenus (€)',
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
          text: "Répartition des structures"
        },
      labels: ['Restaurant A', 'Restaurant B', 'Restaurant C', 'Restaurant D', 'Autres'],
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



}
</script>

<style>
.apexcharts-toolbar {
  z-index:0 !important
}
</style>
