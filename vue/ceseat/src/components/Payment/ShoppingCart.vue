<template>
   
        
<v-dialog v-model="popup" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            :content="getNumberInCart"
            :value="getNumberInCart"
            color="accent"
            offset-x="20"
            offset-y="20"
          >
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-badge>
        </template>
        
        <v-sheet width="100%" class="text-center" >
          <span class="headline">Mes commandes</span>
            <v-container >             
              <v-row >
                <v-col cols="12" >
                   <OrderItem :order="order" :deleteFromOrder="deleteFromOrder" />
                </v-col>
              </v-row>
            </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="goToCheckout">
              Passer au paiement
            </v-btn>
            <v-btn color="blue darken-1" text @click="popup = false">
              Annuler
            </v-btn>
          </v-card-actions>
        </v-sheet>
      </v-dialog>
      
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import {OrderItem} from "ceseat-lib";
const Cart = namespace("Cart");


@Component
export default class ShoppingCart extends Vue {
    popup = false

    @Cart.Getter
    private getNumberInCart! : number

    @Cart.Getter
    private getCart! : any[]

    goToCheckout() {
        this.$router.push('/checkout')
        this.popup = false
    }

    deleteFromOrder(order: any) {
      console.log(order);
    }
    

}
</script>

<style scoped>

</style>
