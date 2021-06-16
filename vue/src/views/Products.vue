<template>
  <div class="home">
  
  <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>
    <li v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </li>

  </section>



   
  </div>
</template>

<script lang="ts">
//import { Options, Vue } from "vue-class-component";
import { Component, Vue, Prop } from 'vue-property-decorator';
import ProductItem from "@/components/ProductItem.vue"; // @ is an alias to /src
//import ProductModel from "../models/ProductModel";
import ProductsService from "../services/ProductsService";
import Product from "@/types/Product";

@Component({
  components: {
    ProductItem,
  },
})
export default class Products extends Vue {
  @Prop() private products: Product[] = [] ;

  data() {
    return {
      errored : false,
      error: null,
      loading: false,
    }
  }

  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.retrieveProducts()
  }

  retrieveProducts () {
    //this.error = null
    //this.loading = true

    ProductsService.getAll()
      .then((response) => {
        this.products = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
}
</script>
