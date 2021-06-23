<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
        <div class="d-flex align-center">
            <!--
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
            -->
        </div>
        <v-container>
          <v-badge
            bottom
            color="green"
            content="ORIGINAL"
          >
            <span style="color:white;font-size:25px;"><b>Node Eat</b></span>
           
          </v-badge>
        </v-container>

             
        
      </router-link>

      
      
      <v-spacer></v-spacer>

      
      <span v-if="!currentUser">
        <v-btn 
          to="/login"
          text
        >
          <span class="mr-2">Se connecter</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </span>

      <span v-else>
        <ShoppingCart/>
        

        <v-btn
          @click.prevent="logOut"
          text
        >
          <span class="mr-2">Déconnexion</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </span>
    </v-app-bar>

    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import {ShoppingCart} from "./components/ShoppingCart.vue"
import ShoppingCart from "@/components/ShoppingCart";
import { namespace } from "vuex-class";

const Auth = namespace("Auth");

@Component({
  components: { ShoppingCart }
})
export default class App extends Vue{
  
  @Auth.State("user")
  private currentUser!: any;

  @Auth.Action
  private signOut!: () => void;

  logOut() {
    this.signOut();
    this.$router.push("/");
  }

}
</script>
