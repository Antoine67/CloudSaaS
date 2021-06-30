<template>
    <v-container>
        <v-col>
        <v-container>
            <p class="text-h5 text--primary">
                Vous n'êtes affilié à aucun restaurant
            </p>
        </v-container>
        </v-col>
    </v-container>
</template>

<script lang="ts">


import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import OrdersManagementItem from "@/components/OrdersManagementItem.vue"
const Auth = namespace("Auth");

@Component({
  components: { OrdersManagementItem }
})

export default class NoRestaurantDashboard extends Vue {

    @Auth.State("user")
    private currentUser!: any;


    
}
</script>