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
	import OrderList from 'src/components/OrderList.vue'; const Components: {
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
	export default Components;

}
declare module 'src/shims-tsx' {
	import Vue, { VNode } from 'vue' global {
	  namespace JSX {
	    // tslint:disable no-empty-interface
	    interface Element extends VNode {}
	    // tslint:disable no-empty-interface
	    interface ElementClass extends Vue {}
	    interface IntrinsicElements {
	      [elem: string]: any
	    }
	  }
	}

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