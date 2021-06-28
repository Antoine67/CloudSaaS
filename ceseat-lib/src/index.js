import Vue from "vue";
import MenuCardItem from "./components/MenuCardItem.vue";
import RestaurantCardItem from "./components/RestaurantCardItem.vue";
import LoginForm from "./components/LoginForm.vue";
import ProductItem from "./components/ProductItem.vue";
import OrderItem from "./components/OrderItem.vue";
import OrderList from "./components/OrderList.vue";

import Vuetify from 'vuetify/lib';
import { VTabs, VTabsSlider, VTab, VIcon, VCol, VRow, VCard, VCardText, VForm, VBtn } from 'vuetify/lib';
//Vue.use(Vuetify);
Vue.use(Vuetify, {
    components: { VTabs, VTabsSlider, VTab, VIcon, VCol, VRow, VCard, VCardText, VForm, VBtn },
});
const Components = {
    MenuCardItem,
    LoginForm,
    ProductItem,
    RestaurantCardItem,
    OrderItem,
    OrderList
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
Vue.component("ProductItem", ProductItem);
Vue.component("RestaurantCardItem", RestaurantCardItem);
Vue.component("OrderItem", OrderItem);
Vue.component("OrderList", OrderList);

export { MenuCardItem };
export { LoginForm };
export { ProductItem };
export { RestaurantCardItem };
export { OrderItem };
export { OrderList };
export default Components;
//# sourceMappingURL=index.js.map