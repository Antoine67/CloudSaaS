 <template>
    <v-card class="mx-auto" max-width="434" tile>
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
        <v-col>
        <v-avatar size="100" style="position:absolute; top: 130px">
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        </v-col>
        <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <v-list-item-title class="title">{{user.surname +" "+user.name}}</v-list-item-title>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-subtitle>{{user.role.title}}</v-list-item-subtitle>  
            <div class="d-flex align-center justify-space-between">
            <v-list-item-subtitle>Notification</v-list-item-subtitle>     
            <v-switch
            v-model="switch1"  
            @click="onModifyNotificationsClick();"  
            ></v-switch>
            </div>
            </div>   
            </v-list-item-content>
        </v-list-item>

        <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Information Utilisateur</v-list-item-title>
          <v-btn icon

          @click.native.stop="dialogUser = true"
          >  
            <v-icon >mdi-wrench-outline</v-icon>
          </v-btn>
        </template>
       <v-dialog
            v-model="dialogUser"
            persistent
            max-width="600px"
          >
            <v-card>
            <v-card-title>
            <span class="text-h5">Profil Utilisateur</span>
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
                    label="Pseudo*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="Prénom*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="Nom*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Email*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Mot de Passe*"
                    type="password"
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                    label="Age*"
                    required
                    ></v-text-field>
                </v-col>
                </v-row>
            </v-container>
            <small>*Champs Obligatoires</small>
            </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="black darken-1"
                  text
                  @click="dialogUser = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="orange darken-1"
                  text
                  @click="onModifyUserClick();dialogUser = false;"
                >
                  Modifier
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Pseudo: </v-list-item-title> 
            <v-list-item-title>{{user.pseudo}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Nom: </v-list-item-title> 
            <v-list-item-title>{{user.name}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Prenom: </v-list-item-title> 
            <v-list-item-title>{{user.surname}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Age: </v-list-item-title> 
            <v-list-item-title>{{user.age}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Email: </v-list-item-title> 
            <v-list-item-title>{{user.email}}</v-list-item-title>
            </div>
            </v-list-item-content>
        </v-list-item>
        </v-list-group>     
        <v-list-group
        :value="true"
        prepend-icon="mdi-home-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Adresse</v-list-item-title>
          <v-btn icon
          
          @click.native.stop="dialogAddress=true"
          >  
            <v-icon>mdi-wrench-outline</v-icon>
          </v-btn>
        </template>
        <v-dialog
            v-model="dialogAddress"
            persistent
            max-width="600px"
          >
            <v-card>
            <v-card-title>
            <span class="text-h5">Adresse</span>
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
                    label="Pays*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="Code Postal*"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="Ville*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Adresse 1*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Adresse 2"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                </v-col>
                </v-row>
            </v-container>
            <small>*Champs Obligatoires</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="black darken-1"
                  text
                  @click="dialogAddress = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="orange darken-1"
                  text
                  @click="onModifyAddressClick();dialogAddress = false;"
                >
                  Modifier
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Pays: </v-list-item-title> 
            <v-list-item-title>{{user.adress.country}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Code Postal: </v-list-item-title> 
            <v-list-item-title>{{user.adress.postalCode}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Ville: </v-list-item-title> 
            <v-list-item-title>{{user.adress.town}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Adresse 1: </v-list-item-title> 
            <v-list-item-title>{{user.adress.adress1}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between" v-if="user.adress.adress2"> 
            <v-list-item-title class="font-weight-bold">Adresse 2: </v-list-item-title> 
            <v-list-item-title>{{user.adress.adress2}}</v-list-item-title>
            </div>
            </v-list-item-content>
        </v-list-item>   
        </v-list-group>        
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductItem extends Vue {
  @Prop() private user!: any;
  @Prop() ModifyUser! : (user: any) => void; 
  @Prop() ModifyAddress! : (user: any) => void; 
  @Prop() ModifyNotifications! : (user: any) => boolean;
  switch1 : boolean = true ;
  dialogUser = false;
  dialogAddress= false;
  beforeMount() {
    this.switch1 = this.user.notifications;
  }
  onModifyUserClick(){
      this.ModifyUser(this.user)
  }
  onModifyAddressClick(){
      this.ModifyAddress(this.user)
  }
  onModifyNotificationsClick(){
      this.ModifyNotifications(this.user)
  }
}
</script>