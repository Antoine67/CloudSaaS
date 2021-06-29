<template>
  <v-container fluid>
    <v-row dense v-if="restaurants">
      <v-col
        v-for="rest in restaurants"
        :key="rest.id"
      >    
          <RestaurantCardItem :restaurant="rest" @click.native="toRestaurantDetails(rest.id)" :style="{cursor:'pointer'}" />
      </v-col>
    </v-row>
    <div v-else>
      Aucun restaurant
    </div>
    
  </v-container>
</template>

<script lang="ts">
  import {RestaurantCardItem} from 'ceseat-lib'
  
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import RestaurantsService from '@/services/RestaurantsService'
  import Restaurant from "@/types/Restaurant";
@Component({
  components: {
     RestaurantCardItem
     
  }
 
})
export default class Home extends Vue {
  restaurants : Restaurant[] = []
  beforeCreate() {
    RestaurantsService.getAll()
      .then((response) => {
        this.restaurants = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  toRestaurantDetails(id: any) {
    this.$router.push({ name: 'RestaurantDetails', params: { id: id }})
  }

}
</script>
