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

import Vue from 'vue'

export default Vue.extend({
  name: 'MenuCardItem',
  props: {
    menu: {
      type: Object,
    }
  },

  data: () => ({
    loading: false,
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },

});

</script>