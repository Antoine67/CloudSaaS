<template>
  <v-app>
    <v-main>
      <login-form @login="getLoginData" />
      <restaurant-card-item :restaurant="restaurant" />
      <MenuCardItem :menu="menu"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
     restaurant : {id: "1", title: "test", rating: 3.5, picture :"https://cdn.vuetifyjs.com/images/cards/cooking.png", description: "descriptionezezae :)"},
     menu:  { id:"1", title: "test", description: "supe" }
  }),
  methods: {
    getLoginData (values) {
      this.jsonEmitted = values
    }
  }
}
</script>