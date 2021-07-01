<template>
  <v-app>
    <notifications  position="bottom right"/>
    <AppHeader
      :onLogoClick="onLogoClick"
      :onLoginClick="onLoginClick"
      :logoColor="headerParams.logoColor"
      :logoText="headerParams.logoText"
      :appTitle="headerParams.appTitle"
      :menuItems="headerParams.menuItems"
      :loggedIn="currentUser"
      :username="`Bonjour ${userData ? userData.username : ''} !`" 
    >
    </AppHeader>

    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {AppHeader} from 'ceseat-lib'

import { namespace } from "vuex-class";

const Auth = namespace("Auth");


@Component({
  components: {
    AppHeader
  },
})
export default class App extends Vue{
  
  @Auth.State("user")
  private currentUser!: any;

  @Auth.State("userData")
  private userData! : any;

  @Auth.Action
  private signOut!: () => void;

  logOut() {
    this.signOut();
    this.$router.push("/");
  }

  onLogoClick() {
    this.$router.push("/")
  }

  onLoginClick() {
    this.$router.push("/login")
  }

  headerParams = {
    logoColor : "blue",
    logoText: "RESTAURANT",
    appTitle: "CesEat",
    menuItems:  [
      { text: 'Mon profil', icon: 'mdi-account', onClick: () => {this.$router.push('/profile')} },
      { text: 'Dashboard', icon: 'mdi-view-dashboard', onClick: () => {this.$router.push('/dashboard')} },
      { text: 'Gestion des produits', icon: 'mdi-food', onClick: () => {this.$router.push('/products-menus-management')} },
      { text: 'Gestion des commande', icon: 'mdi-clipboard-list', onClick: () => {this.$router.push('/my-orders')} },
      { text: 'Gestion du restaurant', icon: 'mdi-silverware-fork-knife', onClick: () => {this.$router.push('/restaurant-management')} },
      { text: 'Déconnexion', icon: 'mdi-account-remove', onClick: () => {this.logOut();} },
      
      
    ],
  }

}
</script>

<style scoped>
  .notification-popup {

  }
</style>
