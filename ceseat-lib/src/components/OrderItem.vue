<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
    elevation="2"
  >
    <v-card-title prepend-icon="mdi-map-marker">
      {{"Ma Commande"}}: <v-chip
            class="ma-2"
            :color="status.color"
            text-color="white"
            >
            {{status.name}}
            </v-chip>
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
  dialog = false;
  status : any = null ;

  onDeleteClick(){
    this.deleteFromOrder(this.order)
  }
  beforeMount(){  
    this.status = this.status_tabs.find(x => x.id === this.order.status);
  }
   
  status_tabs = [
    {id:"WAITING_VALIDATION", name:"en attente de validation", color:"orange"},
    {id:"WAITING_DELIVERER", name:"en attente du livreur", color:"orange"},
    {id:"DELIVERY_IN_PROGRESS", name:"livraison en cours", color:"orange"},
    {id:"ORDER_DELIVERED", name:"livraison terminée", color:"green"},
    {id:"ORDER_CANCELLED_CLIENT", name:"commande annulée", color:"red"},
    {id:"ORDER_CANCELLED_RESTAURANT", name:"commande annulée", color:"red"}
  ]
}


</script>

<style>

.tight-element {
  margin:0
}
</style>