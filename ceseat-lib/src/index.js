import Vue from "vue";
import MenuCardItem from "./components/MenuCardItem.vue";
import RestaurantCardItem from "./components/RestaurantCardItem.vue";
import LoginForm from "./components/LoginForm.vue";
import ProductItem from "./components/ProductItem.vue";
import AppHeader from "./components/AppHeader.vue";
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
    AppHeader
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
Vue.component("AppHeader", AppHeader);
export { MenuCardItem };
export { LoginForm };
export { ProductItem };
export { RestaurantCardItem };
export { AppHeader };
export default Components;
//# sourceMappingURL=index.js.map