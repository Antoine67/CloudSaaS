<template>
  
  <v-card>
      
    <v-card-title 
      class="blue darken-1 white--text font-weight-black title"
    >
      Nouvelle carte<v-spacer></v-spacer>
    <!--
      <v-img 
        aspect-ratio="3.075" max-height="40"                             :src="URL_IMAGE" position="right" contain
      />
      -->
    </v-card-title>

    <v-card-text class='pb-10'>
      <v-row>
        <v-col cols='6'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader">Titre<i>(utilisé pour distinguer vos différentes cartes)</i></v-subheader>
          <v-text-field
            v-model="card.title"
            single-line outlined label="Carte de paiement n°1" hide-details
          />
        </v-col>
      </v-row>
      <v-row>

        
        <v-col cols='6'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader">Nom inscrit sur la carte</v-subheader>
          <v-text-field
            v-model="card.wording"
            single-line outlined label="Max Keller" hide-details
          />
        </v-col>

        <v-col cols='6'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader">N° carte</v-subheader>
          <v-text-field
            v-model="card.number"
              single-line outlined mask="credit-card" label="XXXX XXXX XXXX XXXX"  hide-details
          />
        </v-col>

        <!--
        <v-col col='4'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader">Date d'expiration</v-subheader>           
          <v-select
            :items="MonthList" label="Mois" outlined
            append-icon='mdi-chevron-down' hide-details
          />
        </v-col>

        <v-col col='4'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader"></v-subheader>                   
          <v-select
            :items="YearList" label="Année" outlined
            append-icon='mdi-chevron-down' hide-details
          />
        </v-col>

        -->
        <v-col cols='6'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader">Date expiration</v-subheader>
          <v-text-field
            v-model="card.expirationDate"
            single-line outlined label="01/2022"  hide-details
          />
        </v-col>

        <v-col col='4'>
          <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CVV</v-subheader>             
          <v-text-field single-line outlined hide-details label="123"
            v-model="card.cvv"/>  
        </v-col>

      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-1"
          text
          @click="onReturn"
      >
          Annuler
      </v-btn>
      <v-btn
          color="blue darken-1"
          text
          @click="onCreate(card)"
      >
          Créér
      </v-btn>
    </v-card-actions>

  </v-card>

</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Card from "@/types/Card"

@Component
export default class CardCheckoutItem extends Vue{

    @Prop() onCreate! : (card: any) => any;
    @Prop() onReturn! : () => any;

    @Prop() card : Card 
    
    //URL_IMAGE = URL_IMAGE;
    //YearList =  ['2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036','2037','2038','2039','2040'];    
    //MonthList =  ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];  
         
  
}


</script>
<style scoped>
.active-card {
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  height: 50px;
}
.credit-card {
  border-radius: 15px !important;
}
</style>