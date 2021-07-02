import Vue from "vue";
import MenuCardItem from "./components/MenuCardItem.vue";
import RestaurantCardItem from "./components/RestaurantCardItem.vue";
import LoginForm from "./components/LoginForm.vue";
import GeolocationItem from "./components/GeolocationItem.vue";
import DeliveryItemRealtime from "./components/DeliveryItemRealtime.vue";
import DeliveryStateItem from "./components/DeliveryStateItem.vue";
import DeliveryPickableItem from "./components/DeliveryPickableItem.vue";
import AppHeader from "./components/AppHeader.vue";
import OrderItem from "./components/OrderItem.vue";
import OrderList from "./components/OrderList.vue";
import ProfilePage from "./components/ProfilePage.vue";
import Sponsorship from "./components/Sponsorship.vue";
import Vuetify from 'vuetify/lib';
import { VTabs, VTabsSlider, VTab, VIcon, VCol, VRow, VCard, VCardText, VForm, VBtn } from 'vuetify/lib';
//Vue.use(Vuetify);
Vue.use(Vuetify, {
    components: { VTabs, VTabsSlider, VTab, VIcon, VCol, VRow, VCard, VCardText, VForm, VBtn },
});
const Components = {
    MenuCardItem,
    LoginForm,
    GeolocationItem,
    RestaurantCardItem,
    AppHeader,
    DeliveryItemRealtime,
    DeliveryPickableItem,
    DeliveryStateItem,
    OrderItem,
    OrderList,
    ProfilePage,
    Sponsorship
};
/*
function install(Vue: any) {
    // tslint:disable-next-line: forin
    for (const component in components) {
      // @ts-expect-error
      Vue.component(components[component].name, components[component])
    }
    //Vue.config.globalProperties.$Message = Message
    //Vue.config.globalProperties.$Notification = Notification
    //Vue.config.globalProperties.$Loading = Loadingbar
  }*/
//export default { install }
Vue.component("MenuCardItem", MenuCardItem);
Vue.component("LoginForm", LoginForm);
Vue.component("ProductItem", GeolocationItem);
Vue.component("RestaurantCardItem", RestaurantCardItem);
Vue.component("AppHeader", AppHeader);
Vue.component("DeliveryItemRealtime", DeliveryItemRealtime);
Vue.component("DeliveryPickableItem", DeliveryPickableItem);
Vue.component("DeliveryStateItem", AppHeader);
Vue.component("OrderItem", OrderItem);
Vue.component("OrderList", OrderList);
Vue.component("ProfilePage", ProfilePage);
Vue.component("Sponsorship", Sponsorship);
export { MenuCardItem };
export { LoginForm };
export { GeolocationItem };
export { RestaurantCardItem };
export { DeliveryItemRealtime };
export { DeliveryPickableItem };
export { DeliveryStateItem };
export { AppHeader };
export { OrderItem };
export { OrderList };
export { ProfilePage };
export { Sponsorship };
export default Components;
//# sourceMappingURL=index.js.map