<template>
  <v-container fluid>
    
    
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
