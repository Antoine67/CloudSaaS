<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    sort-by="name"
    class="elevation-1"
  >
    
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Liste des employées</v-toolbar-title>
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
              Nouvel employé
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
                    md="12"
                  >
                    <v-text-field v-model="editedItem.email" v-if="!editedItem.user"
                      label="E-mail"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      v-if="editedIndex > -1"
                      :items="roleEmployees"
                      v-model="editedItem.role"
                      name="Role"
                      item-text="title"
                      return-object
                      label="Select a category"
                    />
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
      Aucun produit
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Employee from '@/types/Employee'
import RoleEmployee from '@/types/RoleEmployee'
import { namespace } from "vuex-class";
import ListEditing from "@/components/RestaurantManagement/ListEditing.vue"
import RestaurantsService from "@/services/RestaurantsService"
import RoleEmployeesService from "@/services/RoleEmployeesService"
import UsersService from "@/services/UsersService"
const Auth = namespace("Auth");

@Component({
  components: { ListEditing }
})
export default class EmployeesManagementItem extends Vue{

  @Auth.State("userData")
  private userData!: any;

  dialog = false
  dialogDelete = false

  headers = [
    {
      text: 'Nom',
      align: 'start',
      value: 'user.username',
    },
    { text: 'E-mail', value: 'user.email' },
    { text: 'Role', value: 'role.title' },
    { text: 'Actions', value: 'actions', sortable: false },
  ] 

  //default data
  editedIndex = -1
  editedItem : Employee = {} as Employee;
  defaultItem : Employee = {} as Employee;

  editItem (item: Employee) {
    this.editedIndex = this.employees.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  deleteItem (item: Employee) {
    this.editedIndex = this.employees.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true    
  }

  deleteItemConfirm () {
    RestaurantsService.deleteEmployees(this.userData.restaurantId, this.editedItem.user.id)
      .then((response) => {
        this.fetchEmployees()
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
      console.log(this.userData.restaurantId, this.editedItem.user.id, this.editedItem.role);
      
      RestaurantsService.updateEmployee(this.userData.restaurantId, this.editedItem.user.id, {roleId: this.editedItem.role.id.toString()})
        .then((response) => {
              console.log(response);
             this.fetchEmployees()
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.close()
        });

    } else {

      UsersService.getByEmail(this.editedItem.email)
        .then((response) => {
          this.employees.push(this.editedItem)

          if (response.data){
            RestaurantsService.createEmployees(this.userData.restaurantId, response.data.id)
            .then((response) => {
              console.log(response);
              this.fetchEmployees()
            })
            .catch((e) => {
              console.log(e);
            })
            .finally(() => {
              this.close()
            });
          }

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

  fetchEmployees(){
    RestaurantsService.getEmployees(this.userData.restaurantId)
      .then((response) => {
        this.employees = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }



  beforeMount() {
    this.fetchEmployees()
    
    RoleEmployeesService.getAll()
      .then((response) => {
        this.roleEmployees = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  employees : Employee[] = [] 
  roleEmployees : RoleEmployee[] = []

  get formTitle () {
        return this.editedIndex === -1 ? 'Ajout employé' : 'Edition employé'
  }

  


}
</script>
