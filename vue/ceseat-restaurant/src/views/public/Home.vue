<template>
  <v-container fluid>
    //TODO qqchose comme :
    Bienvenue sur l'application dédiée aux livreurs CesEat

    Commencez par vous identifier <router-link to="/login" >ici</router-link>

    Vous souhaitez uniquement commander un repas ? Alors rendez-vous <a href="http://ceseat.fr"> ici </a>

    Vous êtes restaurateur et souhaitez partager vos plats ? Alors rendez-vous <a href="http://ceseat-.fr"> ici </a>
    
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
