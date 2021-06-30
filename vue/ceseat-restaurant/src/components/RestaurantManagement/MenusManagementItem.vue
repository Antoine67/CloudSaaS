<template>
  <v-data-table
    :headers="headers"
    :items="menus"
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
        <v-toolbar-title>Menus</v-toolbar-title>
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
              Nouveau menu
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
            <v-card-title class="text-h6">Êtes-vous certain de vouloir supprimer ce menu (cette action est irreversible)?</v-card-title>
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
      Aucun menu
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from '@/types/Menu'
import { namespace } from "vuex-class";
import MenusService from "@/services/MenusService"
@Component({
  components: {  }
})
export default class MenusManagementItem extends Vue{

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
    { text: 'Produits', value: 'products' },
    { text: 'Actions', value: 'actions', sortable: false },
  ] 

  //default data
  editedIndex = -1
  editedItem : Menu = {products: []} as Menu;
  defaultItem : Menu = {products: []} as Menu;

  editItem (item: Menu) {
    this.editedIndex = this.menus.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  deleteItem (item: Menu) {
    this.editedIndex = this.menus.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
  }

  deleteItemConfirm () {
    MenusService.delete(this.menus[this.editedIndex].id)
      .then((response) => {
        this.menus.splice(this.editedIndex, 1)
      })
      .catch((e) => {
        console.log(e);
      });
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
      MenusService.update(this.editedItem.id, this.editedItem)
        .then((response) => {
          Object.assign(this.menus[this.editedIndex], this.editedItem)
          console.log(response)
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.close()
        });

    } else {
      
      MenusService.create(this.editedItem)
        .then((response) => {
          this.menus.push(this.editedItem)
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.close()
        });
    }
  }

  getAvailibilityColor (availability : boolean) {
    return availability ? 'green' : 'red';
  }


beforeMount() {
    MenusService.getAll()
      .then((response) => {
        this.menus = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  menus : Menu[] = [] 

  get formTitle () {
        return this.editedIndex === -1 ? 'Nouveau menu' : 'Edition menu'
  }

  


}
</script>
