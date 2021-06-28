<template>
    <v-container v-if="displayed">
      <v-container v-if="!geolocationData">
        <v-btn @click="getLocation">ask </v-btn>
        <v-btn @click="locateMe" v-model="geolocationData">pos </v-btn>
      </v-container>
      <v-container>
        Position obtenue avec succès : 
        <p v-if="geolocationData && geolocationData.coords">latitude : {{geolocationData.coords.latitude}} et longitude : {{geolocationData.coords.longitude}}</p>
        <p v-else>{{errorStr}}</p>
      </v-container>
    </v-container>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class GeolocationItem extends Vue {

  @Prop({default: false}) displayed!: boolean;

  @Prop() geolocationData : any



  gettingLocation =false
  errorStr = null

  async getLocation() {
    
    return new Promise((resolve, reject) => {

      if(!("geolocation" in navigator)) {
        reject(new Error('Geolocation is not available.'));
      }

      navigator.geolocation.getCurrentPosition(pos => {
        resolve(pos);
      }, err => {
        reject(err);
      });

    });
  }

  async locateMe() {

    this.gettingLocation = true;
    try {
      this.gettingLocation = false;
      this.geolocationData = await this.getLocation();
    } catch(e) {
      this.gettingLocation = false;
      this.errorStr = e.message;
    }
    
  }

  async mounted() {
    await this.getLocation()
    await this.locateMe()
  }
   
}


</script>


<style scoped>

</style>