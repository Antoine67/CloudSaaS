<template>
  <v-container>
    <DeliveryPickableItem v-for="order in orders" :key="order.id"
    :restaurantText="order.restaurant_id"
    :stateText="order.status"
    :dateText="order.date"
    :orderPickedUp="order.deliverer_id != null"
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

@Component({
  components: { DeliveryPickableItem }
})
export default class Deliveries extends Vue {

  beforeMount() {
    OrdersService.getAll()
      .then((response) => {
        this.orders = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  orders = []
}
</script>
