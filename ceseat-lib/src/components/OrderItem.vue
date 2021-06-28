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
          @click.native.stop="dialog=true"
          >  
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </template>

        <v-dialog
            v-model="dialog"
            persistent
            max-width="300"
          >
            <v-card>
              <v-card-title class="text-h5">
                Voulez vous supprimer cet Article ? 
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="black darken-1"
                  text
                  @click="dialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="red darken-1"
                  text
                  @click="onDeleteClick();dialog = false;"
                >
                  Supprimer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
  data () {
      return {
        dialog: false,
      }
    }
}


</script>

<style>

.tight-element {
  margin:0
}
</style>