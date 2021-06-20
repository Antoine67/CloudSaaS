<template>

  <v-card
    :to="{ name: 'RestaurantDetails', params: { id: restaurant.id }}"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src=restaurant.picture
    ></v-img>

    <v-card-title>{{restaurant.title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value=restaurant.rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{restaurant.rating}} 
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        € • {{restaurant.title}}
      </div>

      <div>{{restaurant.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Commander
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">



import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RestaurantCardItem extends Vue {
  @Prop() private restaurant!: any;

  loading = false
  

  reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
}


</script>