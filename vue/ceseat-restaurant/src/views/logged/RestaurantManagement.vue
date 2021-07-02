<template>
    <v-container>
        <v-col>
        <v-container>
            <EmployeesManagementItem class="spacing-playground ma-6"/>
        </v-container>
        </v-col>
    </v-container>
</template>

<script lang="ts">


import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import EmployeesManagementItem from "@/components/EmployeesManagementItem.vue"
const Auth = namespace("Auth");

@Component({
  components: { EmployeesManagementItem }
})

export default class RestaurantManagement extends Vue {

    @Auth.State("user")
    private currentUser!: any;


    
}
</script>