<template>
  <span>{{ product.id }}</span>
</template>

<script lang="ts">
//import { Options, Vue } from "vue-class-component";
//import ProductModel from "../models/ProductModel";
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductItem extends Vue {
  @Prop() private product!: any;

  mounted() {
    //
  }
}
</script>
