<template>
  <v-data-table
    :headers="headers"
    :items="products"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:item.available="{ item }">
      <v-chip
        :color="getAvailibilityColor(item.available)"
        dark
      >
        {{ item.available ? 'Disponible' : 'Indisponible' }}
      </v-chip>
    </template>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Produits</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
          persistent
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nouveau produit
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nom"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="Prix"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-checkbox
                      v-model="editedItem.available"
                      label="Disponible"
                      color="success"
                      hide-details
                    ></v-checkbox>

                   

                    

                  </v-col>
                </v-row>
                <v-row>
                  <ListEditing v-model="editedItem.ingredients" hide-details/>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Annuler
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="save"
              >
                Enregistrer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px" persistent>
          <v-card>
            <v-card-title class="text-h6">Êtes-vous certain de vouloir supprimer ce produit (cette action est irreversible)?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">Supprimer</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
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
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from '@/types/Product'
import { namespace } from "vuex-class";
import ListEditing from "@/components/RestaurantManagement/ListEditing.vue"
@Component({
  components: { ListEditing }
})
export default class ProductsManagementItem extends Vue{

  dialog = false
  dialogDelete = false

  headers = [
    {
      text: 'Nom',
      align: 'start',
      value: 'name',
    },
    { text: 'Description', value: 'description' },
    { text: 'Prix', value: 'price' },
    { text: 'Disponibilité', value: 'available' },
    { text: 'Ingredients', value: 'ingredients' },
    { text: 'Actions', value: 'actions', sortable: false },
  ] 

  //default data
  editedIndex = -1
  editedItem : Product = {ingredients: []} as Product;
  defaultItem : Product = {ingredients: []} as Product;

  editItem (item: Product) {
    this.editedIndex = this.products.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  deleteItem (item: Product) {
    this.editedIndex = this.products.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
  }

  deleteItemConfirm () {
    this.products.splice(this.editedIndex, 1)
    this.closeDelete()
  }

  close () {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  }

  closeDelete () {
    this.dialogDelete = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  }

  save () {
    if (this.editedIndex > -1) {
      Object.assign(this.products[this.editedIndex], this.editedItem)
    } else {
      this.products.push(this.editedItem)
    }
    this.close()
  }

  getAvailibilityColor (availability : boolean) {
    return availability ? 'green' : 'red';
  }


  products : Product[] = [
    {
      id: 5, 
      name: "Super produit",
      description: "Voici mon produit",
      restaurant_id: 16,
      price: 13.5,
      available: true,
      ingredients : [
          "salt",
          "bread",
          "salad"
      ]
    },
] 

  get formTitle () {
        return this.editedIndex === -1 ? 'Nouveau produit' : 'Edition produit'
  }

  


}
</script>
