<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
    elevation="2"
  >
    <v-card-title prepend-icon="mdi-map-marker">
      {{"Mes Commandes"}}: 
    </v-card-title>
   
    <v-list>
        
      <v-list-group
        v-for="order in orders"
        :key="order.id"
        :prepend-icon="order.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title v-text="restaurant"></v-list-item-title>
            <v-list-item-title v-text="order.pricing.total+'€'"></v-list-item-title>
            </div>
            <v-list-item-subtitle v-text="order.date"></v-list-item-subtitle>
          </v-list-item-content>          
        </template>
    
        <v-list-group
        v-for="menu in order.menus"
        :key="menu.id"
        :prepend-icon="menu.action"
        no-action
        sub-group
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="menu.name"></v-list-item-title>
          </v-list-item-content>
        </template>

                    <v-list-item dense
                    v-for="product in menu.products"
                    :key="product.id"
                    >              
                        <v-list-item-content>
                            <p class="tight-element">{{product.name}}</p>
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
  @Prop() private orders!: any;
  @Prop() private restaurant!: string;
  //beforeMount(){  
    //this.status = this.status_tabs.find(x => x.id === this.order.status);
  //}
}


</script>

<style>

.tight-element {
  margin:0
}
</style>