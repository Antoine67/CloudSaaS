<template>
  <div class="home">
    <li v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </li>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductItem from "@/components/ProductItem.vue"; // @ is an alias to /src
import ProductModel from "../models/ProductModel";

@Options({
  components: {
    ProductItem,
  },
})
export default class Products extends Vue {
  products: any = [];

  mounted() {
    new ProductModel().get().then((products) => {
      this.products = products;
      //console.log(products);
    });
  }
}
</script>
