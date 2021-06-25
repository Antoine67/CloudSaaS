<template>
  <v-app>
    <AppHeader
      :onLogoClick="onLogoClick"
      :onLoginClick="onLoginClick"
      :logoColor="headerParams.logoColor"
      :logoText="headerParams.logoText"
      :appTitle="headerParams.appTitle"
      :menuItems="headerParams.menuItems"
      :loggedIn="currentUser"
      username="Bienvenue //TODO AJOUTER USER" 
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
    logoColor : "red",
    logoText: "DELIVERY",
    appTitle: "CesEat",
    menuItems:  [
      { text: 'Mon profil', icon: 'mdi-account', onClick: () => {this.$router.push('/profile')} },
      { text: 'Déconnexion', icon: 'mdi-account-remove', onClick: () => {this.logOut();} },
    ],
  }

}
</script>
