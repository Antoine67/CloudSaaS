 <template>
    <v-card class="mx-auto" max-width="434" tile v-if="user">
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
        <v-col>
        <v-avatar size="100" style="position:absolute; top: 130px">
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        </v-col>
        <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <v-list-item-title class="title" >{{user.surname +" "+user.name}}</v-list-item-title>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-subtitle>{{user.role.title}}</v-list-item-subtitle>  
            <div class="d-flex align-center justify-space-between">
            <v-list-item-subtitle>Activer les notifications</v-list-item-subtitle>     
            <v-switch
            v-model="user.notifications"  
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
          <v-form ref="UserForm">
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
                    v-model="pseudo"
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
                    v-model="surname"
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
                    v-model="name"
                    label="Nom*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    v-model="password"
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
                    v-model="age"
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
                  @click="onModifyUserClick()"
                >
                  Modifier
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-dialog>
          <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Nom d'utilisateur: </v-list-item-title> 
            <v-list-item-title v-if="user.username">{{user.username}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Nom: </v-list-item-title> 
            <v-list-item-title v-if="user.name">{{user.name}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Prenom: </v-list-item-title> 
            <v-list-item-title v-if="user.surname">{{user.surname}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Age: </v-list-item-title> 
            <v-list-item-title v-if="user.age">{{user.age}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Email: </v-list-item-title> 
            <v-list-item-title v-if="user.email">{{user.email}}</v-list-item-title>
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
          <v-form ref="AddressForm">
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
                    v-model="country"
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
                    v-model="postalCode"
                    label="Code Postal*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    v-model="town"
                    label="Ville*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    v-model="address1"
                    label="Adresse 1*"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    v-model="address2"
                    label ="Adresse 2"
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
                  @click="onModifyAddressClick();"
                >
                  Modifier
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-dialog>
          <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Pays: </v-list-item-title> 
            <v-list-item-title v-if="user.address && user.address.country">{{user.address.country}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Code Postal: </v-list-item-title> 
            <v-list-item-title v-if="user.address && user.address.postalCode">{{user.address.postalCode}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">Ville: </v-list-item-title> 
            <v-list-item-title v-if="user.address && user.address.town">{{user.address.town}}</v-list-item-title>
            </div> 
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">addresse 1: </v-list-item-title> 
            <v-list-item-title v-if="user.address && user.address.address1">{{user.address.address1}}</v-list-item-title>
            </div>
            <div class="d-flex align-center justify-space-between"> 
            <v-list-item-title class="font-weight-bold">addresse 2: </v-list-item-title> 
            <v-list-item-title v-if="user.address && user.address.address2">{{user.address.address2}}</v-list-item-title>
            </div>
            </v-list-item-content>
        </v-list-item>   
        </v-list-group>        
    </v-card>
    <span v-else> Chargement... </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductItem extends Vue {
  @Prop() private user!: any;
  @Prop() ModifyUser! : (data: any) => Promise<any>;
  @Prop() ModifyAddress! : (data: any) => Promise<any>;
  @Prop() ModifyNotifications! : (data: any) => Promise<boolean>;
  @Prop() showMessage!: (message: string, color?: string, title?: string, ico?: string) => void;
  @Prop() submitUser!: () => any;
  @Prop() submitAddress!: () => any;
  @Prop() submitNotification!: () => any;


  dialogUser = false;
  dialogAddress= false;

  // Modify User data
  pseudo= ""
  password= ""
  name= ""
  surname=""                   
  age=""                         
  email=""

  // Modify User data
  country = ""
  postalCode= ""
  town= ""
  address1= ""
  address2= ""

  
  emailRules= [
    // @ts-ignore
    v => !!v || "Requis",
    // @ts-ignore
    v => /.+@.+\..+/.test(v) || "E-mail invalide"
  ]


  onModifyUserClick(){
  // @ts-ignore
  if (this.$refs.UserForm.validate()) {    
    if(this.pseudo && this.password && this.name && this.surname &&  this.age && this.email)    
    {
         this.ModifyUser({pseudo: this.pseudo, password: this.password, name: this.name,surname:this.surname, age: this.age, email:this.email}).then(
          (data: any) => {
              //this.showMessage("Connexion réussie", "success")
            this.submitUser();
            this.dialogUser = false;
          },
          (error: any) => {
              console.log(error);
              this.showMessage("Champ(s) entrée(s) incorrect", "error", "modification échouée")
          }
      );
    }  
  }
}
  onModifyAddressClick(){
  // @ts-ignore
  if (this.$refs.AddressForm.validate()) {
    if(this.country && this.postalCode && this.town && this.address1)    
    {
         this.ModifyAddress({country: this.country, postalCode: this.postalCode, town: this.town, address1: this.address1, address2:this.address2}).then(
          (data: any) => {
              //this.showMessage("Connexion réussie", "success")
            this.submitAddress();
            this.dialogAddress = false;
          },
          (error: any) => {
              console.log(error);
              this.showMessage("Champ(s) entrée(s) incorrect", "error", "modification échouée")
          }
      );
    }  
  }
}
  onModifyNotificationsClick(){
      this.ModifyNotifications({notifications: this.user.notifications}).then(
          (data: any) => {
              //this.showMessage("Connexion réussie", "success")
            this.submitNotification();
          },
          (error: any) => {
              console.log(error);
              this.showMessage("Champ(s) entrée(s) incorrect", "error", "modification échouée")
          }
      );
  }
  reset() {
      // @ts-ignore
      this.$refs.form.reset();
  }
  resetValidation() {
      // @ts-ignore
      this.$refs.form.resetValidation();
  }
}
</script>