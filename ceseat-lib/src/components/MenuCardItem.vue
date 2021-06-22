<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
    elevation="2"
  >
    <v-card-title prepend-icon="mdi-map-marker">
      {{menu.title}}
    </v-card-title>
   

    <v-list>
      <v-list-group
        v-for="product in menu.products"
        :key="product.id"
        :prepend-icon="product.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="product.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item dense
          v-for="ingredient in product.ingredients"
          :key="ingredient + product.id"
        >
          <v-list-item-content>
            <p class="tight-element">{{ingredient}}</p>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>


  </v-card>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuCardItem extends Vue {
  @Prop() private menu!: any;


  loading = false
  

  reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
}

</script>

<style>

.tight-element {
  margin:0
}
</style>