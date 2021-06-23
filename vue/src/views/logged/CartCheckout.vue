<template>

<v-container v-if="getNumberInCart" >

    <v-list>
        <v-list-item v-for="menuItem in getCart" :key="menuItem.menu.id">
            <v-list-item-content> 
                {{menuItem.menu.title}} x{{menuItem.quantity}}
            </v-list-item-content>

        </v-list-item>
    </v-list>  



    <CardCheckoutItem/>

    <!-- TODO  move into own component -->
    <v-container>
        <v-radio-group>
            <v-list>
                <v-list-item v-for="card in cards" :key="card.id">
                    <v-radio 
                        v-model="model" :label="card.name"  
                        :value="card" 
                        :value-comparator="comparator"
                    ></v-radio>
                </v-list-item>
            </v-list>
        </v-radio-group>
        <v-btn>Gérer mes cartes</v-btn>
    </v-container>

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
import CardCheckoutItem from '@/components/CardCheckoutItem';
const Cart = namespace("Cart");

@Component({
  components: {  CardCheckoutItem }
})
export default class CartCheckout extends Vue{
  //publishableKey = process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY;
  //successURL=`http://${location.host}/${this.$route.path}?state=success`
  //cancelURL=`http://${location.host}/${this.$route.path}?state=cancel`
  
  @Cart.Getter
  private getCart : any[]

  @Cart.Getter
  private getNumberInCart : number

  cards : any[]

  dialog = true

  created() {
      this.retrieveCards()
  }

  submit () {
      console.log("todo");
  }

  retrieveCards () {
    //this.error = null
    //this.loading = true

    /*
    MenusService.getAll()
      .then((response) => {
        this.menus = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
      */
     this.cards = [
      {id:1, name: "Lucas Faninger", number: "XXXX XXXX XXXX XXXX", expiration_date: "07/06/2022", cvv:"784"},
      {id:2, name: "Nicolas Ekobe", number: "XXXX XXXX XXXX XXXX", expiration_date: "07/06/2022", cvv:"784"}
     ]
  }

}
</script>
