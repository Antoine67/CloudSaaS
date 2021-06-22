<template>

  <v-card
    class="mx-auto"
    max-width="500"
  >
  <p>{{menu.title}}</p>
    <v-list>
      <v-list-item-group v-model="menu">
        <v-list-item
          v-for="product in menu.products"
          :key="product.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="product.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';

import {VList, VListItemGroup, VListItemContent, VListItemTitle} from 'vuetify/lib'

@Component({
  components:{
    VList, VListItemGroup, VListItemContent, VListItemTitle
  }
})
export default class MenuCardItem extends Vue {
  @Prop() private menu!: any;

  loading = false
  

  reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
}

</script>