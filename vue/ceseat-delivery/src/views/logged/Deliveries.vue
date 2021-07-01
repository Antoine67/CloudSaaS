<template>
  <v-container>
    <v-container class="grey--text mb-2" >
        <v-icon :color="$socket.connected ? 'green' : 'red'" > mdi-access-point</v-icon>
        <span class="ma-1" >{{ $socket.connected ? 'Mise à jour en temps réel' : 'Mise à jour désactivée' }}</span>
    </v-container>
    
    <v-container v-if="orders && orders.length">
      <v-container v-if="orders.length == 1 && orders[0].status == 'DELIVERY_IN_PROGRESS'" class="text-h4">
        <p>Ma livraison en cours</p>
      </v-container>
       <v-container v-else class="text-h4">
         <p>Livraisons en attente</p>
      </v-container>
      <v-container>
        <DeliveryPickableItem v-for="order in orders" :key="order.id"
        :restaurantText="order.restaurant_id"
        :stateText="order.status"
        :dateText="order.date"
        :orderPickedUp="order.deliverer_id == userData.userId"
        :onTakeOrderClick=onTakeOrderClick
        :onDeliveredOrderClick=onDeliveredOrderClick
        :description="`${order.address.address1} ${order.address.address2} ${order.address.address1} 
        ${order.address.town}
        (${order.pricing.total}€ - ${order.menus.length} menus)`"
        stateColor="blue"
        :order="order"
        />
      </v-container>
    </v-container>
    <v-container v-else>
      Aucune livraison en attente
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { namespace } from "vuex-class";

import DeliveryPickableItem from "@/components/DeliveryPickableItem.vue"
import OrdersService from "@/services/OrdersService"
const Auth = namespace("Auth");

@Component({
  components: { DeliveryPickableItem }
})

export default class Deliveries extends Vue {

  @Auth.State("userData")
  private userData! : any;

  fetchOrders(){
    OrdersService.getAll()
      .then((response) => {
        this.orders = response.data;
        //console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  beforeMount() {
    this.fetchOrders();
  }

   mounted() {
        // subscribe
        this.$socket.client.on('needUpdate', (payload: any) => {
           if(payload && payload.type) {
                if(payload.type == "NEW_ORDER" || payload.type == "ORDER_UPDATE") {
                    this.fetchOrders();
                }
            }
        })

    }

  onTakeOrderClick(order: any){
    OrdersService.update(order.id, { deliverer_id: this.userData.userId, status: "DELIVERY_IN_PROGRESS"})
      .then((response) => {
        //console.log(response);
        this.fetchOrders();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onDeliveredOrderClick(order: any){
    OrdersService.update(order.id, { status: "ORDER_DELIVERED"})
      .then((response) => {
        console.log(response);
        this.fetchOrders();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  orders = []
}
</script>
