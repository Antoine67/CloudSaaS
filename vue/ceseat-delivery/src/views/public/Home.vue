<template>
  <v-container fluid>
    
    
  </v-container>
</template>

<script lang="ts">

  import { Component, Vue, Prop } from 'vue-property-decorator';
  import MenusService from '@/services/MenusService'
@Component({
  components: {
     
  }
 
})
export default class Home extends Vue {
  restaurants = [ 
    {id: "1", title: "test", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "descriptionezezae :)"},
    {id: "2", title: "test2", rating: 1, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "description :)"},
    {id: "3", title: "test3", rating: 5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "descriptiozezen :)"},
    {id: "4", title: "test4", rating: 1.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "description :)"},
    {id: "5", title: "test5", rating: 2.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "description :)"},
  ];

  created() {
    //MenusService.getAll().catch((e)=>console.log("errrrr:",e));
  }

  toRestaurantDetails(id: any) {
    this.$router.push({ name: 'RestaurantDetails', params: { id: id }})
  }

}
</script>
