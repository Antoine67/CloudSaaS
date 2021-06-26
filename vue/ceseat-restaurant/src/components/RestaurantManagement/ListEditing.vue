<template>
    <v-container>
        <v-text-field
            v-model="newIngredient"
            prepend-icon="mdi-food-variant"
            append-outer-icon="mdi-plus-thick"
            clear-icon="mdi-close-circle"
            clearable
            label="Ajouter un ingrédient"
            type="text"
            @click:append-outer="addFromTextField"
            @click:clear="clearTextField"
          ></v-text-field>

        <v-list
            style="max-height: 150px"
            class="overflow-y-auto"
            dense
        >
            <v-list-item v-for="(item, idx) in value" v-bind:key="idx" dense>
                    <v-list-item-title>{{item}}</v-list-item-title>
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

import { namespace } from "vuex-class";

@Component({
  components: {  }
})
export default class ListEditing extends Vue{

    @Prop() value : any

    newIngredient = ""

    editedIndex = -1

    onDelete(index : number) {
        this.editedIndex = index
        this.value.splice(this.editedIndex, 1)
    }

    addFromTextField() {
        if(!this.value) return;
        if(this.newIngredient && this.newIngredient != "") {
             this.value.push(this.newIngredient)
            this.clearTextField()
        }
    }

    clearTextField() {
        this.newIngredient = ""
    }


}
</script>
