<template>
  <v-container fluid class="text-h5 pa-5">
    
    Bienvenue sur l'application dédiée aux livreurs CesEat<br/><br/>

    Commencez par vous identifier <router-link to="/login" >ici</router-link><br/><br/>

    Vous souhaitez uniquement commander un repas ? Alors rendez-vous <a href="http://ceseat.fr"> ici </a><br/><br/>

    Vous êtes restaurateur et souhaitez proposer de délicieux plats ? Alors rendez-vous <a href="http://ceseat-restaurant.fr"> ici </a><br/><br/>
    
  </v-container>
</template>

<script lang="ts">

  import { Component, Vue, Prop } from 'vue-property-decorator';
  import MenusService from '@/services/MenusService'
  import { namespace } from "vuex-class";

  const Auth = namespace("Auth");
  @Component({
    components: {
      
    }
  })
  export default class Home extends Vue {

    @Auth.State("user")
    private currentUser!: any;

    beforeMount() {
      if(this.currentUser) {
        this.$router.push('/deliveries')
      }
    }
  }
</script>
