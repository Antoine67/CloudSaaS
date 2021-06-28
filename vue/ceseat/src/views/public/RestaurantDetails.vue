<template>
    <v-container fluid>
        <v-row dense>
        <v-col
            v-for="menu in menus"
            :key="menu.id"
        >          
            <MenuCardItem :menu="menu" :addToCart="addToCart" :pay="pay" />
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
     this.menus = [];
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