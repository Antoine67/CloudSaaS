declare module 'ceseat-lib' {
	import MenuCardItem from 'src/components/MenuCardItem.vue';
	import RestaurantCardItem from 'src/components/RestaurantCardItem.vue';
	import LoginForm from 'src/components/LoginForm.vue';
	import GeolocationItem from 'src/components/GeolocationItem.vue';
	import DeliveryItemRealtime from 'src/components/DeliveryItemRealtime.vue';
	import DeliveryStateItem from 'src/components/DeliveryStateItem.vue';
	import DeliveryPickableItem from 'src/components/DeliveryPickableItem.vue';
	import AppHeader from 'src/components/AppHeader.vue';
	import OrderItem from 'src/components/OrderItem.vue';
	import OrderList from 'src/components/OrderList.vue';
	import ProfilePage from 'src/components/ProfilePage.vue';
	const Components: {
	    MenuCardItem: any;
	    LoginForm: any;
	    GeolocationItem: any;
	    RestaurantCardItem: any;
	    AppHeader: any;
	    DeliveryItemRealtime: any;
	    DeliveryPickableItem: any;
	    DeliveryStateItem: any;
	    OrderItem: any;
	    OrderList: any;
	    ProfilePage: any;
	};
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
	export default Components;

}

/*declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
*/

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}