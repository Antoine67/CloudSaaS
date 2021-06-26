<template>
  <v-container>
      <ProductsManagementItem class="spacing-playground ma-6"/>
      <v-divider/>
       <MenusManagementItem class="spacing-playground ma-6"/>
   
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ProductsManagementItem from '@/components/RestaurantManagement/ProductsManagementItem.vue'
import MenusManagementItem from '@/components/RestaurantManagement/MenusManagementItem.vue'

import { namespace } from "vuex-class";

@Component({
  components: { ProductsManagementItem, MenusManagementItem  }
})
export default class RestaurantManagement extends Vue{


}
</script>
