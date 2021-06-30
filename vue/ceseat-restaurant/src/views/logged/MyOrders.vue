<template>
    <v-container>
        <v-col>
        <v-container>
            <p class="text-h5 text--primary">
                Commande à valider
            </p>
        </v-container>
        <v-container>  
            <OrdersManagementItem v-for="order in orders" :key="order.id"
            :restaurantText="order.restaurant_id"
            :stateText="order.status"
            :dateText="order.date"
            :onValidationOrderClick=onValidationOrderClick
            :onEndPreparationOrderClick=onEndPreparationOrderClick
            description="TODO 16 rue des peupliers 67637 STRASBOURG"
            stateColor="blue"
            :order="order"
        />
        </v-container>
        <v-container>
            <p class="text-h5 text--primary">
                Commande en cours de préparation
            </p>
        </v-container>
        <v-container>  
            <OrdersManagementItem v-for="order in orders_validate" :key="order.id"
            :restaurantText="order.restaurant_id"
            :stateText="order.status"
            :dateText="order.date"
            :onValidationOrderClick=onValidationOrderClick
            :onEndPreparationOrderClick=onEndPreparationOrderClick
            description="TODO 16 rue des peupliers 67637 STRASBOURG"
            stateColor="blue"
            :order="order"
            />
        </v-container>
        <v-container>
            <p class="text-h5 text--primary">
                Commande en attente de livreur
            </p>
        </v-container>
        <v-container>
            <OrdersManagementItem v-for="order in orders_waiting" :key="order.id"
            :restaurantText="order.restaurant_id"
            :stateText="order.status"
            :dateText="order.date"
            :onValidationOrderClick=onValidationOrderClick
            :onEndPreparationOrderClick=onEndPreparationOrderClick
            description="TODO 16 rue des peupliers 67637 STRASBOURG"
            stateColor="blue"
            :order="order"
            />
        </v-container>
        </v-col>
    </v-container>
</template>

<script lang="ts">


import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import OrdersManagementItem from "@/components/OrdersManagementItem.vue"
import OrdersService from "@/services/OrdersService"
const Auth = namespace("Auth");

@Component({
  components: { OrdersManagementItem }
})

export default class MyOrders extends Vue {

    @Auth.State("user")
    private currentUser!: any;

    fetchOrders(){
        OrdersService.getAllPayed()
        .then((response) => {
            this.orders = response.data;
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });

        
        OrdersService.getAllValidated()
        .then((response) => {
            this.orders_validate = response.data;
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });

        
        OrdersService.getAllWaiting()
        .then((response) => {
            this.orders_waiting = response.data;
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }

    beforeMount() {
        this.fetchOrders();
    }

    

    onValidationOrderClick(order: any){
        OrdersService.update(order.id, { status: "IN_PREPARATION"})
        .then((response) => {
            console.log(response);
            this.fetchOrders();
        })
        .catch((e) => {
            console.log(e);
        });
    }

    onEndPreparationOrderClick(order: any){
        OrdersService.update(order.id, { status: "WAITING_DELIVERER"})
        .then((response) => {
            console.log(response);
            this.fetchOrders();
        })
        .catch((e) => {
            console.log(e);
        });
    }

    orders = []
    orders_validate = []
    orders_waiting = []
}
</script>