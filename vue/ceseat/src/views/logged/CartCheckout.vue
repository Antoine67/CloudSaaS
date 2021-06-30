<template>

<v-container v-if="getNumberInCart" >



    <OrderItem v-if="getOrder" :order="getOrder" :deleteFromOrder="removeFromCart" />


    <MyCards v-model="selected"/>
    
    

    <v-btn @click="submit" :disabled="!getNumberInCart">Procéder au paiement</v-btn>
</v-container>

<v-dialog v-else v-model="dialog" persistent max-width="500px" min-width="360px">
 
    <v-card
        elevation="12"
    >
        <v-card-title>Panier vide !</v-card-title>
        <v-card-text>
            <div class="text--primary">
                Vous n'avez encore séléctionné aucun produit/menu
            </div>
        </v-card-text>
        
        <v-card-actions class="pt-0">
            <v-btn to="/"> Retour</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { namespace } from "vuex-class";

import {OrderItem} from "ceseat-lib";

import MyCards from '@/components/Payment/MyCards.vue';
import Menu from "@/types/Menu";
import {EOrderState} from "@/types/EOrderState";
const Cart = namespace("Cart");
const Auth = namespace("Auth");

import OrdersService from "@/services/OrdersService"

@Component({
  components: { MyCards, OrderItem }
})
export default class CartCheckout extends Vue{
  //publishableKey = process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY;
  //successURL=`http://${location.host}/${this.$route.path}?state=success`
  //cancelURL=`http://${location.host}/${this.$route.path}?state=cancel`
  
  @Cart.Getter
  private getOrder : any

  @Cart.Getter
  private getNumberInCart : number

  @Cart.Action
  private removeFromCart!: (menu: Menu) => any

  @Cart.Action
  private clearCart!: () => any

  @Auth.State("userData")
  private userData! : any;

  dialog = true

  selected : any[]


  submit () {
      if(!this.selected) {
          console.log("Aucune CB séléctionnée !") //TODO popup?
          return;
      }
      
      //TODO Handle payment ?
      let order = this.getOrder
      order.status = EOrderState.WAITING_VALIDATION
      order.pricing.payment_card_id = this.selected[0].id
      order.pricing.paid = true
      order.customer_id = this.userData.userId
      

      console.log("POSTING", order, JSON.stringify(order))
      OrdersService.create(order)
        .then((response) => {
            console.log("Commande passée !") //TODO popup?
            this.clearCart()
        })
        .catch((e) => {
            console.log("Une erreur est survenue") //TODO popup?
            console.log(e);
        });
  }


  

}
</script>
