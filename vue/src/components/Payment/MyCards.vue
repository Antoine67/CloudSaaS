<template>
<v-container>
<!--
    <v-dialog v-model="popup" persistent>
       <v-data-table
        :headers="headers"
        :items="cards"
        :single-select="true"
        item-key="name"
        show-select
        class="elevation-1"
        >
        <template v-slot:item.expiration_year="{ item }">
            <v-chip
            :color="getColor(item.expiration_year)"
            dark
            >
            {{ item.expiration_year }}
            </v-chip>
        </template>
        </v-data-table>
      </v-dialog>
-->
<v-dialog v-model="popup" persistent>
    <v-card>
        <v-data-table
            :headers="headers"
            :items="cards"
            sort-by="id"
            class="elevation-1"
            :single-select="true"
            item-key="name"
            show-select
            v-model="selected"
        >
        
            <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-toolbar-title>Mes cartes</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog
                v-model="dialog"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >
                    Ajouter une carte
                    </v-btn>
                </template>
                 <CardCheckoutItem :onReturn=onNewCardReturn :onCreate=onNewCardCreate />
                </v-dialog>

                
                <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title>Êtes-vous sur de vouloir supprimer cette carte ?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Annuler</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }" >
            <v-icon
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            </template>
            <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="initialize"
            >
                Reset
            </v-btn>
            </template>
            <template v-slot:item.expiration_year="{ item }">
                <v-chip
                :color="getColor(item.expiration_year)"
                dark
                >
                {{ item.expiration_year }}
                </v-chip>
            </template>
        </v-data-table>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="popup=false">Retour</v-btn>
            <v-btn color="blue darken-1" text @click="popup=false">OK</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</v-dialog>

<v-btn @click="popup=true">Gérer mes cartes</v-btn>
    <span v-if="selected && selected[0]">
        Carte séléctionnée : {{selected && selected[0] ? selected[0].card_number : ""}}
    </span>
    <span v-else>
        Aucune carte séléctionée
    </span>
</v-container>

      

      

</template>
<script lang="ts">
import { Component, Vue, Prop} from "vue-property-decorator";

import CardCheckoutItem from '@/components/Payment/CardCheckoutItem.vue';

import Card from '@/types/Card'

@Component({
    components: {
        CardCheckoutItem
    }
})
export default class MyCards extends Vue{


    popup = false
    dialog = false
    dialogDelete= false

    cards : Card[] = [] 

    editedIndex= -1
      editedItem= {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      }
      

    selected= []

    headers= [
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'N°', value: 'card_number' },
          { text: 'Mois expiration', value: 'expiration_month' },
          { text: 'Année expiration', value: 'expiration_year' },
          { text: 'CVV', value: 'cvv' },
          { text: 'Actions', value: 'actions', sortable: false },
    ]

    onNewCardReturn() {
        this.dialog = false
    }

    onNewCardCreate() {
        this.dialog = false
    }

    getColor (expiration_year: number) {
        if (expiration_year < 2021) return 'red'
        else if (expiration_year < 2022) return 'orange'
        else return 'green'
    }

    deleteItem (item: any) {
        //this.editedIndex = this.cards.indexOf(item)
        //this.editedItem = Object.assign({}, item)
        //this.dialogDelete = true
    }

    deleteItemConfirm () {
        //TODO Delete card there
        console.log(this.editedItem," deleted")
        this.closeDelete()
    }

    closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
            //this.editedItem = Object.assign({}, this.defaultItem)
            //this.editedIndex = -1
        })
    }


    beforeMount() {
        this.retrieveCards()
    }

    retrieveCards () {
        this.cards = [
        {id:1, name: "Lucas Faninger", card_number: "XXXX XXXX XXXX XXXX", expiration_month: "07", expiration_year: '2023', cvv:"784"},
        {id:2, name: "Nicolas Ekobe", card_number: "XXXX XXXX XXXX XXXX", expiration_month: "07", expiration_year: '2023', cvv:"784"}
        ]
    }
     
  
}


</script>
<style scoped>

</style>