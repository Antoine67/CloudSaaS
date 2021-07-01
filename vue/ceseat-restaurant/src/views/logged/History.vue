<template>
    <v-container>
        <v-col>
        <v-container>
            <p class="text-h5 text--primary">
                Historique des commandes
            </p>
        </v-container>
        <v-container v-if="orders && orders.length > 0"> 
            <OrdersManagementItem v-for="order in orders" :key="order.id"
            :restaurantText="order.restaurant_id"
            :stateText="order.status"
            :dateText="order.date"
            :description="`${order.pricing.total}€ - ${order.menus.length} menus`"
            stateColor="blue"
            :order="order"
            />
        </v-container>
        <v-container v-else  class="grey--text">Aucune commande</v-container>
        
            
        <v-container><v-btn @click="$router.push('/my-orders')"> Retour </v-btn></v-container>
        </v-col>
    </v-container>
</template>

<script lang="ts">


import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import OrdersManagementItem from "@/components/OrdersManagementItem.vue"
import OrdersService from "@/services/OrdersService"
const Auth = namespace("Auth");

@Component({
  components: { OrdersManagementItem }
})

export default class History extends Vue {

    @Auth.State("user")
    private currentUser!: any;

    fetchOrders(){
        OrdersService.getAllPassed()
        .then((response) => {
            this.orders = response.data;
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }

    beforeMount() {
        this.fetchOrders();
    }

    

    orders = []
}
</script>