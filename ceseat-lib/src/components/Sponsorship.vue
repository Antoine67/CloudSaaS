<template>
    <v-card
    class="mx-auto"
    max-width="500"
    tile
    elevation="2"
  >
    <div class="d-flex align-center justify-space-between">
      <v-card-title prepend-icon="mdi-map-marker">
      {{"Mon code de parrainage"}} :
      <span class="sponsor-chip">{{sponsorshipCode}}</span>
      </v-card-title>
    </div>
    
    <div v-if="sponsor">
        <v-card-title prepend-icon="mdi-map-marker">
        {{"Votre parrain : "}}
        <span class="sponsor-chip">{{sponsor}}</span>
        </v-card-title>
    </div>
    <div v-else>
      <v-card-title prepend-icon="mdi-map-marker">
        {{"Ajouter un parrain"}}:
      </v-card-title>
      <v-form
        class="marg-card"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="newSponsorCode"
          :counter="13"
          :rules="sponsorRules"
          label="Code sponsor"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
        VALIDER
        </v-btn>    
      </v-form>   
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Sponsorship extends Vue {
  @Prop() private sponsorshipCode!: any;
  @Prop() private sponsor!: any;
  @Prop() sponsorCode! : (sponsor: any) => void; 
  
  newSponsorCode = ""
  
  //@Prop({default: true}) enableDeleteButton! : boolean;
  dialog = false;
  valid = true;
  
  sponsorRules = [
    (v : any) => !!v || 'Un sponsor est nécéssaire',
    (v : any) => (v && v.length == 13) || 'Un code sponsor est composé de 13 caractères.',
    (v : any) => (v != this.sponsorshipCode) || 'Vous ne pouvez sponsoriser votre propre compte.',
  ]
    
  validate() {
    // @ts-ignore
    this.$refs.form.validate();
    this.sponsorCode(this.newSponsorCode)
  }
  
}
</script>
<style>
.marg-card{
  margin: 0 3% 0 3%;
  padding-bottom: 4%;
}
</style>