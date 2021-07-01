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
                            <v-form ref="creationForm" v-model="valid" lazy-validation :disabled="loading">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="restaurantName" :rules="[rules.required]" label="Nom du restaurant" maxlength="20" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="description" :rules="[rules.required]" label="Description" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="rib" :rules="[rules.required]" label="RIB" maxlength="20" required></v-text-field>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex" cols="12" sm="6" xsm="12" align-end>
                                         <v-btn color="primary" text @click="returnClick" :disabled="loading" >  <v-icon>mdi-chevron-left</v-icon> Retour </v-btn>
                                    </v-col>
                                    <v-col class="d-flex ml-auto" cols="12" sm="4" xsm="12" align-end>
                                        <v-btn x-large block :disabled="!valid || loading" color="success" @click="creationSubmit" :loading="loading">Créer</v-btn>
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
import RestaurantsService from "@/services/RestaurantsService"

@Component
export default class RestaurantForm extends Vue {

    @Prop() login!:  (data: any) => Promise<any>;
    @Prop() showMessage!: (message: string, color?: string, title?: string, ico?: string) => void;
    @Prop() returnClick!: () => any;

    @Prop() roleIdentifier!: string;


    private loading = false;

    tab = 0
    tabs = [
        {id:"creation", name:"Creer un restaurant", icon:"mdi-silverware-fork-knife"}
    ];
    valid = true
    
    // Creation data
    restaurantName = ""
    description= ""
    rib= ""
    
    rules= {
      // @ts-ignore
      required: value => !!value || "Requis",
      // @ts-ignore
      min: v => (v && v.length >= 8) || "Minimum 8 caractères"
    }

  
    creationSubmit() {
        
        // @ts-ignore
        if (this.$refs.creationForm.validate()) {
            if (this.restaurantName && this.description && this.rib) {

                this.loading = true;

                this.restaurant.title = this.restaurantName;
                this.restaurant.description = this.description;
                this.restaurant.rib = this.rib;
                console.log(this.restaurant);

                
                RestaurantsService.create(this.restaurant)
                .then((response: any) => {
                    this.loading = false;
                    console.log(response.data);
                    this.$router.push("/profile");
                })
                .catch((e: any) => {
                    this.loading = false;
                    console.log(e);
                    this.showMessage("Information incorrect", "error", "Création échouée")
                });
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

    restaurant = { 
        title: null,
        description: null,
        rib: null        
    }
    

}
</script>

<style></style>
