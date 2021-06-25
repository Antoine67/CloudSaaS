<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
    elevation="2"
  >
    <v-card-title prepend-icon="mdi-map-marker">
      {{"Ma Commande"}}
    </v-card-title>
   

    <v-list>
        
      <v-list-group
        v-for="menu in order.menus"
        :key="menu.id"
        :prepend-icon="menu.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="menu.name"></v-list-item-title>
          </v-list-item-content>
          <v-btn icon
          v-if="enableDeleteButton"
          @click="onDeleteClick">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </template>
        
        <v-list-group
        v-for="product in menu.products"
        :key="product.id"
        :prepend-icon="product.action"
        no-action
        sub-group
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="product.name"></v-list-item-title>
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
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OrderItem extends Vue {
  @Prop() private order!: any;
  @Prop({default: true}) enableDeleteButton! : boolean;
  @Prop() deleteFromOrder! : (order: any) => void; 

  
  onDeleteClick(){
    this.deleteFromOrder(this.order)
  }

}


</script>

<style>

.tight-element {
  margin:0
}
</style>