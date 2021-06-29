<template>

<v-container v-if="getNumberInCart" >



    <OrderItem v-if="getOrder" :order="getOrder" :deleteFromOrder="deleteFromOrder" />


    <MyCards />

    <v-btn @click="submit" :disabled="!getNumberInCart">Procéder au paiement</v-btn>
</v-container>

<v-dialog v-else v-model="dialog" persistent max-width="500px" min-width="360px">
 
    <v-card
    
    elevation="12"
    >
        <v-card-title>Panier vide !</v-card-title>
        <v-card-text>
            <div class="text--primary">
                Vous n'avez encore séléctionné aucun produit/menus
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
const Cart = namespace("Cart");

@Component({
  components: { MyCards, OrderItem }
})
export default class CartCheckout extends Vue{
  //publishableKey = process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY;
  //successURL=`http://${location.host}/${this.$route.path}?state=success`
  //cancelURL=`http://${location.host}/${this.$route.path}?state=cancel`
  
  @Cart.Getter
  private getOrder : any[]

  @Cart.Getter
  private getNumberInCart : number

  @Cart.Action
  private removeFromCart!: (menu: Menu) => any

  cards : any[]

  dialog = true


  submit () {
      console.log("todo");
  }

  deleteFromOrder(menu: any) {
      this.removeFromCart(menu)
    }

  

}
</script>
