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
            item-key="number"
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
                 <CardCheckoutItem :onReturn=onNewCardReturn :onCreate=onNewCardCreate :card=editedItem />
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
            <p>Aucune carte</p>
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
        Carte séléctionnée : {{selected && selected[0] ? `${selected[0].title} (${selected[0].expirationDate})` : ""}}
    </span>
    <span v-else>
        Aucune carte séléctionée
    </span>
</v-container>

      

      

</template>
<script lang="ts">
import { Component, Vue, Prop} from "vue-property-decorator";

import CardCheckoutItem from '@/components/Payment/CardCheckoutItem.vue';

import UsersService from '@/services/UsersService'

import Card from '@/types/Card'
import { namespace } from "vuex-class";
const Auth = namespace("Auth");

@Component({
    components: {
        CardCheckoutItem
    }
})
export default class MyCards extends Vue{
    
    @Auth.State("userData")
    private userData! : any;

    popup = false
    dialog = false
    dialogDelete= false

    cards : Card[] = [] 

    editedIndex= -1
    editedItem= {  } as Card
      

    selected = []

    headers= [
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'title',
          },
          { text: 'Libellé', value: 'wording' },
          { text: 'N°', value: 'number' },
          { text: 'Date d\'expiration', value: 'expirationDate' },
          { text: 'CVV', value: 'cvv' },
          { text: 'Actions', value: 'actions', sortable: false },
    ]

    onNewCardReturn() {
        this.dialog = false
    }

    onNewCardCreate(card : any) {
        card.type = "credit_card"
        console.log("POSTING :", this.userData.userId, card)
        UsersService.createCard(this.userData.userId, card)
        .then((response) => {
            this.fetchCards()
        })
        .catch((e) => {
            console.log(e);
        });
        
       this.editedIndex = -1
       this.editedItem = {}
       this.dialog = false
    }

    getColor (expiration_year: number) {
        if (expiration_year < 2021) return 'red'
        else if (expiration_year < 2022) return 'orange'
        else return 'green'
    }

    deleteItem (item: any) {
        this.editedIndex = this.cards.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
    }

    deleteItemConfirm () {
        UsersService.deleteCard(this.userData.userId, this.editedItem.id)
        .then((response) => {
            this.fetchCards()
        })
        .catch((e) => {
            console.log(e);
        });

        this.closeDelete()
    }

    closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
    }


    created() {
        this.fetchCards()
    }

    fetchCards() {
        UsersService.getAllCards(this.userData.userId)
        .then((response) => {
            this.cards = response.data as Card[];
        })
        .catch((e) => {
            console.log(e);
        });
    }

     
  
}


</script>
<style scoped>

</style>