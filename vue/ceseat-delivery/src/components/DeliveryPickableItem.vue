<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>{{dateText}}</div>
      <v-row>
        <v-col>
        <p class="text-h5 text--primary">
            {{restaurantText}}
        </p>
        </v-col>
        <v-col class="text-right">
            <v-chip
            class="ma-2"
            :color="stateColor"
            text-color="white"
            >
            {{stateText}}
            </v-chip>
        </v-col>
      </v-row>

      <div>{{description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="blue accent-4"
        @click="onTakeOrderClick(order)"
        v-if="!orderPickedUp"
      >
        Récupérer la commande
      </v-btn>
      <v-btn
        text
        color="blue accent-4"
        @click="onDeliveredOrderClick(order)"
        v-else
      >
        Commande livrée
      </v-btn>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Voir la commande
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <OrderItem :order=order :enableDeleteButton="false"/>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
//import { Options, Vue } from "vue-class-component";
//import ProductModel from "../models/ProductModel";
import { Component, Prop, Vue } from 'vue-property-decorator';

import {OrderItem} from 'ceseat-lib'

@Component
export default class DeliveryPickableItem extends Vue {
  @Prop() private restaurantText! : string
  @Prop() private stateText! : string
  @Prop() private dateText! : string
  @Prop() private description! : string
  @Prop() private stateColor! : string
  @Prop() private order! : any
  @Prop({default: false}) private orderPickedUp! : boolean
  @Prop({default: true}) private showButtons! : boolean

  @Prop() onTakeOrderClick! : (order: any) => any
  @Prop() onDeliveredOrderClick! : (order: any) => any


  reveal = false

 

  mounted() {
    //
  }
}
</script>
