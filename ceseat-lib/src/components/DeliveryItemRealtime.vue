<template>
    <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            {{deliveryTitle}}
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <p v-if="message.time">{{ message.time }}</p>
                  <p>
                    <v-progress-circular v-if="message.loading"
                      indeterminate
                      :size="20"
                      color="primary"
                    ></v-progress-circular>
                    <v-icon
                      v-else
                      color="green darken-2"
                    >
                      mdi-check
                    </v-icon>
                    {{ message.message }}
                    </p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
//import { Options, Vue } from "vue-class-component";
//import ProductModel from "../models/ProductModel";
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DeliveryItemRealtime extends Vue {
  @Prop({default: "Ma commande"}) private deliveryTitle!: string;

  @Prop() private messages! : any[]

 

  mounted() {
    //
  }
}
</script>
