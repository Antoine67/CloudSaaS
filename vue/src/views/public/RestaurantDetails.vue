<template>
    <v-container fluid>
        <v-row dense>
        <v-col
            v-for="menu in menus"
            :key="menu.id"
        >          
            <MenuCardItem :menu="menu"/>
        </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts">
//import { Options, Vue } from "vue-class-component";
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuCardItem from "@/components/MenuCardItem.vue"; // @ is an alias to /src

import MenusService from "@/services/MenusService";
import Menu from "@/types/Menu";

@Component({
  components: {
    MenuCardItem,
  },
})
export default class Products extends Vue {
  private menus: Menu[] = [] ;

  
  errored = false
  error = null
  loading = false
  

  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.retrieveMenus()
  }

  retrieveMenus () {
    //this.error = null
    //this.loading = true

    /*
    MenusService.getAll()
      .then((response) => {
        this.menus = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
      */
     this.menus = [
      {id:"test", title: "menu1", description: "supe", products: [
          {
              id:"1",
              title: "test",
              description: "supe",
          },
           {
              id:"2",
              title: "test",
              description: "supe",
          }
      ]},
      {id:"test2", title: "menu2", description: "supe", products: [] }
     ];
  }
  
}
</script>