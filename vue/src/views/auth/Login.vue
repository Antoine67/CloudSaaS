<template>
    <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
            <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                <v-tab v-for="i in tabs" :key="i">
                    <v-icon large>{{ i.icon }}</v-icon>
                    <div class="caption py-1">{{ i.name }}</div>
                </v-tab>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="loginForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Mot de passe" hint="Au moins 8 caractères" counter @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex" cols="12" sm="4" xsm="12" align-end>
                                        <v-btn x-large block :disabled="!valid" color="success" @click="validate"> Connexion </v-btn>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="6" xsm="12" align-end>
                                         <v-btn color="primary" text to="/" >  <v-icon>mdi-chevron-left</v-icon> Retour </v-btn>
                                         
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="registerForm" v-model="valid" lazy-validation>
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
                                        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Mot de passe" hint="Au moins 8 caractères" counter @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirmation du mot de passe" counter @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex ml-auto" cols="12" sm="4" xsm="12">
                                        <v-btn x-large block :disabled="!valid" color="success" @click="validate">S'enregistrer</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </div>
    </v-dialog>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Les mots de passe ne correspondent pas";
    }
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Se connecter", icon:"mdi-account"},
        {name:"Créér un compte", icon:"mdi-account-outline"}
    ],
    valid: true,
    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Requis",
      v => /.+@.+\..+/.test(v) || "E-mail invalide"
    ],
    emailRules: [
      v => !!v || "Requis",
      v => /.+@.+\..+/.test(v) || "E-mail invalide"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Requis",
      min: v => (v && v.length >= 8) || "Minimum 8 caractères"
    }
  })

};
</script>

<style></style>
