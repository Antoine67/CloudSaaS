<template>
    <v-container fluid>
        <v-row dense>
        <v-col
            v-for="menu in menus"
            :key="menu.id"
        >          
            <MenuCardItem :menu="menu" :addToCart="addToCart" :pay="pay"  :addEnabled="true" />
        </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import {MenuCardItem} from "ceseat-lib";

import MenusService from "@/services/MenusService";
import ProductsService from "@/services/ProductsService";
import Menu from "@/types/Menu";
import Product from "@/types/Product";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");
const Cart = namespace("Cart");

@Component({
  components: {
    MenuCardItem,
  },
})
export default class RestaurantDetails extends Vue {
  private menus: Menu[] = [] ;

  @Auth.Getter
  private isLoggedIn!: boolean;

  @Cart.Action
  private addItemToCart!: (menu: Menu) => Promise<any>;
  
  errored = false
  error = null
  loading = false
  

  beforeCreate () {
    let resId = this.$route.params.id
    if(!resId) return;
    MenusService.getFromRestaurant(resId)
      .then((response) => {
        this.menus = response.data as Menu[];
      })
      .catch((e) => {
        console.log(e);
      });
  }


  addToCart(menu: Menu) {
    if(this.isLoggedIn) {
      this.addItemToCart(menu);

    }else {
      this.$router.push("/login")
    }
    
  }

  pay(menu: Menu) {
    if(this.isLoggedIn) {
      this.addToCart(menu)
      this.$router.push("/checkout")

    }else {
      this.$router.push("/login")
    }
  }
  
}
</script>