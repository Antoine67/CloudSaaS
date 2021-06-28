<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
    elevation="2"
  >
  <div class="d-flex align-center justify-space-between">
    <v-card-title prepend-icon="mdi-map-marker" >
      {{menu.name}}
    </v-card-title>
    <v-card-title prepend-icon="mdi-map-marker" >
      {{menu.price}}€
    </v-card-title>
  </div>

    <v-list>
      <v-list-group
        v-for="menuProduct in menu.products"
        :key="menuProduct.id"
        :prepend-icon="menuProduct.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
              <v-list-item-title >{{product[menuProduct.product_id].name}}</v-list-item-title>    
          </v-list-item-content>
        </template>

        <v-list-item dense
          v-for="ingredient in product[menuProduct.product_id].ingredients"
          :key="ingredient + product[menuProduct.product_id].id"
        >
          <v-list-item-content>
            <p class="tight-element">{{ingredient}}</p>
          </v-list-item-content>
        </v-list-item>
        
      </v-list-group>
    </v-list>

    <v-card-actions v-if="enableAddButton || enablePayButton">
      <v-btn
        v-if="enablePayButton"
        color="deep-purple lighten-2"
        text
        @click="onPayClick"
      >
        Commander
      </v-btn>
      <v-btn
        v-if="enableAddButton"
        color="deep-purple lighten-2"
        text
        @click="onAddClick"
      >
        Ajouter à ma commande
      </v-btn>
    </v-card-actions>


  </v-card>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuCardItem extends Vue {
  @Prop() private menu!: any;
  @Prop() private product!: any;
  @Prop() addToCart! : (menu: any) => void; 
  @Prop() pay! : (menu: any) => void; 
  @Prop({default: true}) enableAddButton! : boolean;
  @Prop({default: true}) enablePayButton! : boolean;

  onAddClick() {
    this.addToCart(this.menu);
  }

  onPayClick() {
    this.pay(this.menu);
  }
}

</script>

<style>

.tight-element {
  margin:0
}
</style>