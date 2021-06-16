<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="rest in restaurants"
        :key="rest.id"
      >          
        <RestaurantCardItem :restaurant="rest"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import RestaurantCardItem from '../components/RestaurantCardItem.vue'
  import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {
    RestaurantCardItem,
  },
})
export default class Home extends Vue {
  @Prop() private restaurants = [ 
    {id: "1", title: "test", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "descriptionezezae :)"},
    {id: "2", title: "test2", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "description :)"},
    {id: "3", title: "test3", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "descriptiozezen :)"},
    {id: "4", title: "test4", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "description :)"},
    {id: "5", title: "test5", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "description :)"},
  ];

  }
</script>
