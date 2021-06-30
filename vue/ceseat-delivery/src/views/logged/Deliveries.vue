<template>
  <v-container>
    <DeliveryPickableItem v-for="order in orders" :key="order.id"
    :restaurantText="order.restaurant_id"
    :stateText="order.status"
    :dateText="order.date"
    :orderPickedUp="order.deliverer_id == userData.userId"
    :onTakeOrderClick=onTakeOrderClick
    :onDeliveredOrderClick=onDeliveredOrderClick
    description="TODO 16 rue des peupliers 67637 STRASBOURG"
    stateColor="blue"
    :order="order"
    />
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
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  beforeMount() {
    this.fetchOrders();
  }

  onTakeOrderClick(order: any){
    OrdersService.update(order.id, { deliverer_id: this.userData.userId, status: "DELIVERY_IN_PROGRESS"})
      .then((response) => {
        console.log(response);
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
