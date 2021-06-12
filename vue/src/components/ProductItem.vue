<template>
  <span>{{ product.id }}</span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductModel from "../models/ProductModel";

@Options({
  props: {
    product: ProductModel,
  },
})
export default class ProductItem extends Vue {
  product!: ProductModel;

  mounted() {
    //
  }
}
</script>
