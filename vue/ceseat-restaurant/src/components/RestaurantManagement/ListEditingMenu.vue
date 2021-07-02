<template>
    <v-container>
        <v-select
            v-model="newProduct"
            append-outer-icon="mdi-plus-thick"
            :items="products"
            name="Role"
            item-text="name"
            return-object
            label="Selectionner un produit"
            @click:append-outer="addFromTextField"
            @click:clear="clearTextField"
        />

        <v-list
            style="max-height: 150px"
            class="overflow-y-auto"
            dense
        >
            <v-list-item v-for="(item, idx) in value" v-bind:key="idx" dense>
                    <v-list-item-title>{{item.name}}</v-list-item-title>
                    <v-btn
                        @click="onDelete(idx)"
                        icon
                        small
                        color="red"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
            </v-list-item>
        </v-list>


    </v-container>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProductsService from "@/services/ProductsService"
import Product from '@/types/Product'

import { namespace } from "vuex-class";

@Component({
  components: {  }
})
export default class ListEditingMenu extends Vue{

    @Prop() value : any

    newProduct = ""

    editedIndex = -1


    onDelete(index : number) {
        this.editedIndex = index
        this.value.splice(this.editedIndex, 1)
    }

    addFromTextField() {
        if(!this.value) return;
        if(this.newProduct && this.newProduct != "") {
             this.value.push(this.newProduct)
            this.clearTextField()
        }
    }

    clearTextField() {
        this.newProduct = ""
    }

    beforeMount() {
  
        ProductsService.getAll()
        .then((response) => {
            this.products = response.data;
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }
  products : Product[] = [] 

}
</script>
