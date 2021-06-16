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

      <v-btn
        to="/login"
        text
      >
        <span class="mr-2">Se connecter</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
//import Header from '@/components/partial/Header'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
