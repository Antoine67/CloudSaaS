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
        <template v-slot:additionalElementsLogged><ShoppingCart /></template>
    </AppHeader>

    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {AppHeader} from 'ceseat-lib'

import ShoppingCart from "@/components/Payment/ShoppingCart.vue";

import { namespace } from "vuex-class";

const Auth = namespace("Auth");


@Component({
  components: {
    ShoppingCart,
    AppHeader
  },
})
export default class App extends Vue{
  
  @Auth.State("user")
  private currentUser!: any;

  @Auth.Action
  private signOut!: () => void;

  @Auth.State("userData")
  private userData! : any;

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
    logoColor : "green",
    logoText: "ORIGINAL",
    appTitle: "CesEat",
    menuItems:  [
      { text: 'Accueil', icon: 'mdi-clipboard-list', onClick: () => {this.$router.push('/')} },
      { text: 'Mon profil', icon: 'mdi-account', onClick: () => {this.$router.push('/profile')} },
      { text: 'Dashboard', icon: 'mdi-view-dashboard', onClick: () => {this.$router.push('/my-orders')} },
      { text: 'Parrainage', icon: 'mdi-face-recognition', onClick: () => {this.$router.push('/sponsorship')} },
      { text: 'Déconnexion', icon: 'mdi-account-remove', onClick: () => {this.logOut();} },
    ],
  }

}
</script>
