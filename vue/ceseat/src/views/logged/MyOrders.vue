<template>
    <v-container>
        <v-col>
        <v-container>
            <p class="text-h5 text--primary">
                Commande en cours
            </p>
        </v-container>
        <v-container>  
            <OrdersDashboard v-for="order in orders" :key="order.id"
            :order="order"
        />
        </v-container>
        <v-container>
            <p class="text-h5 text--primary">
                Commande passée
            </p>
        </v-container>
        <v-container v-if="orders_passed && orders_passed.length > 0">  
            <OrdersDashboardArchive v-for="order in orders_passed" :key="order.id"
            :restaurantText="order.restaurant_id"
            :stateText="order.status"
            :dateText="order.date"
            :description="`${order.pricing.total}€ - ${order.menus.length} menus`"
            stateColor="blue"
            :order="order"
            />
        </v-container>
        </v-col>
    </v-container>
</template>

<script lang="ts">


import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import OrdersDashboard from "@/components/OrdersDashboard.vue"
import OrdersDashboardArchive from "@/components/OrdersDashboardArchive.vue"
import OrdersService from "@/services/OrdersService"
const Auth = namespace("Auth");

@Component({
  components: { OrdersDashboard, OrdersDashboardArchive }
})

export default class MyOrders extends Vue {

    @Auth.State("user")
    private currentUser!: any;

    fetchOrders(){
        OrdersService.getAllInProgress()
        .then((response: any) => {
            this.orders = response.data;
            console.log(response.data);
        })
        .catch((e: any) => {
            console.log(e);
        });

        
        OrdersService.getAllPassed()
        .then((response: any) => {
            this.orders_passed = response.data;
            console.log(response.data);
        })
        .catch((e: any) => {
            console.log(e);
        });

        console.log(this.orders_passed);
    }

    beforeMount() {
        this.fetchOrders();
    }

    

    orders = []
    orders_passed = []
}
</script>