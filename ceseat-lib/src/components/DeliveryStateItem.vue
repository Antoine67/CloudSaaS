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
      <p v-if="delivererText">Livré par {{delivererText}}</p>
      
       
      
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
//import { Options, Vue } from "vue-class-component";
//import ProductModel from "../models/ProductModel";
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DeliveryStateItem extends Vue {
  @Prop() private restaurantText! : string
  @Prop() private stateText! : string
  @Prop() private dateText! : string
  @Prop() private stateColor! : string
  @Prop() private delivererText! : string

 

  mounted() {
    //
  }
}
</script>
