<template>

<v-container v-if="getNumberInCart" class="text-center" >



    <OrderItem v-if="getOrder" :order="getOrder" :deleteFromOrder="removeFromCart" />


    <MyCards v-model="selected"/>
    
    

    <v-btn
        @click="submit" :disabled="!getNumberInCart"
        class="ma-2"
        color="green darken-2"
        dark
        >
        <v-icon
            dark
            left
        >
            mdi-cart-arrow-down
        </v-icon>Procéder au paiement
    </v-btn>
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

import User from "@/types/User"
import UsersService from "@/services/UsersService"

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

  user : User = {}

  selected : any[]

  fetchUser() {
        UsersService.get(this.userData.userId)
        .then((response) => {
            this.user = response.data;
        })
        .catch((e) => {
            console.log(e);
        });
    }

   mounted() {
       this.fetchUser()
   }

  submit () {
      if(!this.selected) {
        this.$notify({
            title: 'Erreur',
            text: 'Aucune carte bancaire séléctionnée, rendez-vous dans "Gérer mes cartes"',
            type: "error"
        });
        return;
      }
      
      
      if(!this.user.address) {
        this.$notify({
            title: 'Erreur',
            text: 'Aucune adresse renseignée pour la livraison, veuillez en ajouter une (disponible sur votre page de profil)"',
            type: "error"
        });
        return;
      }
      
      //TODO Handle payment ?
      let order = this.getOrder
      order.status = EOrderState.WAITING_VALIDATION
      order.pricing.payment_card_id = this.selected[0].id
      order.pricing.paid = true
      order.customer_id = this.userData.userId

      order.address = this.user.address
      
        
      //console.log("POSTING", order, JSON.stringify(order))
      OrdersService.create(order)
        .then((response) => {
             this.$notify({
                title: 'Succès !',
                text: 'Votre commande a été passée avec succès',
                type: "success"
            });
            this.clearCart()
            this.$router.push("/my-orders")
        })
        .catch((e) => {
            this.$notify({
                title: 'Erreur',
                text: 'Une erreur est survenue, veuillez réessayez ultérieurement',
                type: "error"
            });
            console.log(e);
        });
  }


  

}
</script>
