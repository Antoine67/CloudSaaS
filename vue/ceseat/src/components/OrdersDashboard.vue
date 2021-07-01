<template>
  <DeliveryItemRealtime
  :deliveryTitle="`${order.pricing.total}€ - ${order.menus.length} menu(s)`"  
  :messages="messages"
  />

</template>

<script lang="ts">
//import { Options, Vue } from "vue-class-component";
//import ProductModel from "../models/ProductModel";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DeliveryItemRealtime } from "ceseat-lib"

@Component
export default class OrdersDashboard extends Vue {
  @Prop() private order! : any


  reveal = false
  
  enumOrdersStatePending = {
    "WAITING_PAYMENT": "Commande en attente de paiement",
    "WAITING_VALIDATION":  "Commande en attente de validation",
    "IN_PREPARATION":  "En cours de préparation",
    "WAITING_DELIVERER":  "En attente d'un livreur",
    "DELIVERY_IN_PROGRESS":  "En cours de livraison",
    "ORDER_DELIVERED": "Commande livrée" }
  
  enumOrdersState = {
    "WAITING_PAYMENT": "Commande payée",
    "WAITING_VALIDATION":  "Commande validée",
    "IN_PREPARATION":  "Commande préparée",
    "WAITING_DELIVERER":  "Livreur trouvé",
    "DELIVERY_IN_PROGRESS":  "Commande livrée",
    "ORDER_DELIVERED": "Commande livrée" }
 
  messages = [];

  mounted() {
    for (const [key, value] of Object.entries(this.enumOrdersState)) {
      if (key == this.order.status && this.order.status == "ORDER_DELIVERED"){
        this.messages.push({ message: value})
        break;
      }
      else if (key == this.order.status){
        this.messages.push({ message: this.enumOrdersStatePending[key], loading: true, color:"orange"})
        break;
      }
      this.messages.push({ message: value});
    }
  }
}
</script>
