<template>
    <v-container fluid>
        <v-row dense>
        <v-col
            v-for="menu in menus"
            :key="menu.id"
        >          
            <MenuCardItem :menu="menu" :addToCart="addToCart" :pay="pay" :product="products" :addEnabled="true" />
        </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import {MenuCardItem} from "ceseat-lib";

import MenusService from "@/services/MenusService";
import Menu from "@/types/Menu";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");
const Cart = namespace("Cart");

@Component({
  components: {
    MenuCardItem,
  },
})
export default class Products extends Vue {
  private menus: Menu[] = [] ;

  private products: Products[] = [];

  @Auth.Getter
  private isLoggedIn!: boolean;

  @Cart.Action
  private addItemToCart!: (ctx: any, qty: number) => Promise<any>;
  
  errored = false
  error = null
  loading = false
  

  created () {
    this.retrieveMenus()
  }

  retrieveMenus () {
    //this.error = null
    //this.loading = true

    let resId = this.$route.params.id
    if(!resId) return;
    MenusService.getFromRestaurant(resId)
      .then((response) => {
        this.menus = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
      /*
      
     this.menus = [
       {
        id:1, 
        name: "Super menu",
        description: "Voici mon menu",
        restaurant_id: 16,
        price: 13.5,
        available: true,
        products : [
            {
              step: "entry",  
              product_id: 0,
              quantity: 1
            },
            {
              step: "main",
              product_id: 1,
              quantity: 1
            }
        ]
      }
     ];
    */

     this.products = [{ 
        id:0,
        name: "Super produit",
        description: "Voici mon produit",
        restaurant_id: 16,
        available: true,
        ingredients : [
            "salt",
            "bread",
            "salad"
        ]
      },
      {
        id:1,
        name: "fajitas",
        description: "Voici mon produit",
        restaurant_id: 16,
        available: true,
        ingredients : [
            "tomate",
            "pain pita",
            "salad"
        ]
      }]
  }

  addToCart(menu: Menu) {
    if(this.isLoggedIn) {
      this.addItemToCart(menu, 1);

    }else {
      this.$router.push("/login")
    }
    
  }

  pay(menu: Menu) {
    if(this.isLoggedIn) {
      this.addToCart(menu);
      this.$router.push("/checkout")

    }else {
      this.$router.push("/login")
    }
  }
  
}
</script>