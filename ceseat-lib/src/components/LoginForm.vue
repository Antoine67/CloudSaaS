<template>
    
    <div>
        <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow >
            <v-tabs-slider color="purple darken-4"></v-tabs-slider>
            <v-tab v-for="i in tabs" :key="i.id">
                <v-icon large>{{ i.icon }}</v-icon>
                <div class="caption py-1">{{ i.name }}</div>
            </v-tab>
            <v-tab-item>
                <v-card class="px-4">
                    <v-card-text>
                        <v-form ref="loginForm" v-model="valid" lazy-validation :disabled="loading">
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="loginPassword" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1" label="Mot de passe" hint="Au moins 8 caractères" counter @click:append="showPassword = !showPassword"></v-text-field>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="d-flex" cols="12" sm="4" xsm="12" align-end>
                                    <v-btn x-large block :disabled="!valid || loading" :loading="loading" color="success" @click="loginSubmit"> Connexion </v-btn>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="6" xsm="12" align-end>
                                    <v-btn color="primary" text to="/" :disabled="loading" >  <v-icon>mdi-chevron-left</v-icon> Retour </v-btn>
                                    
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card class="px-4">
                    <v-card-text>
                        <v-form ref="registerForm" v-model="valid" lazy-validation :disabled="loading">
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="firstName" :rules="[rules.required]" label="Prénom" maxlength="20" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="lastName" :rules="[rules.required]" label="Nom" maxlength="20" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="username" :rules="[rules.required, rules.min]" label="Nom d'utilisateur" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1" label="Mot de passe" hint="Au moins 8 caractères" counter @click:append="showPassword = !showPassword"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field block v-model="verify" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="showPassword ? 'text' : 'password'" name="input-10-1" label="Confirmation du mot de passe" counter @click:append="showPassword = !showPassword"></v-text-field>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="d-flex ml-auto" cols="12" sm="4" xsm="12" align-end>
                                    <v-btn x-large block :disabled="!valid || loading" color="success" @click="registerSubmit" :loading="loading">S'enregistrer</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </div>

        
        
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Login extends Vue {

    @Prop() login!:  (data: any) => Promise<any>;
    @Prop() register!: (data: any) => Promise<any>;
    @Prop() showMessage!: (message: string, color?: string, title?: string, ico?: string) => void;
    @Prop() submitLogin! : () => any;


    private loading = false;

    tab = 0
    tabs = [
        {id:"login", name:"Se connecter", icon:"mdi-account"},
        {id:"register", name:"Créér un compte", icon:"mdi-account-outline"}
    ];
    valid = true
    
    // Register data
    firstName = ""
    lastName= ""
    email= ""
    password= ""
    verify= ""
    username = ""

    // Login data
    loginPassword= ""
    loginEmail= ""
    
    // Validation rules
    loginEmailRules = [
      // @ts-ignore
      v => !!v || "Requis" ,
      // @ts-ignore
      v => /.+@.+\..+/.test(v) || "E-mail invalide"
    ]
    emailRules= [
      // @ts-ignore
      v => !!v || "Requis",
      // @ts-ignore
      v => /.+@.+\..+/.test(v) || "E-mail invalide"
    ]

    showPassword= false
    
    rules= {
      // @ts-ignore
      required: value => !!value || "Requis",
      // @ts-ignore
      min: v => (v && v.length >= 8) || "Minimum 8 caractères"
    }


    get passwordMatch() {
        return () => this.password === this.verify || "Les mots de passe ne correspondent pas";
    }
  
    loginSubmit() {
        
        // @ts-ignore
        if (this.$refs.loginForm.validate()) {
            if (this.loginEmail && this.loginPassword) {

                this.loading = true;
                this.login({email: this.loginEmail, password: this.loginPassword}).then(
                    (data: any) => {
                        //this.showMessage("Connexion réussie", "success")
                       this.submitLogin()
                    },
                    (error: any) => {
                        this.loading = false;
                        console.log(error);
                        this.showMessage("Identifiant ou mot de passe incorrect", "error", "Authentification échouée")
                    }
                );
            }
        }

    }
    registerSubmit() {
        
        // @ts-ignore
        if (this.$refs.registerForm.validate()) {
            if (this.firstName && this.lastName && this.verify && this.email && this.password && this.username) {
                this.loading = true;
                this.register({email: this.email, password: this.password, username: this.username}).then(
                    (data: any) => {
                        this.showMessage("Vous pouvez à présent vous connecter", "success", "Profil créé avec succès")
                        this.tab = 0
                        //this.$router.push("/profile");
                    },
                    (error: any) => {
                        this.loading = false;
                        console.log(error);
                        this.showMessage("Rééssayez ultérieuerement", "error", "La création du profil a échoué")
                    }
                );
            }
        }
        

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

<style></style>
