declare module 'src/index' {
	import MenuCardItem from 'src/components/MenuCardItem.vue';
	import RestaurantCardItem from 'src/components/RestaurantCardItem.vue';
	import LoginForm from 'src/components/LoginForm.vue';
	import ProductItem from 'src/components/ProductItem.vue';
	import AppHeader from 'src/components/AppHeader.vue'; const Components: {
	    MenuCardItem: any;
	    LoginForm: any;
	    ProductItem: any;
	    RestaurantCardItem: any;
	    AppHeader: any;
	};
	export { MenuCardItem };
	export { LoginForm };
	export { ProductItem };
	export { RestaurantCardItem };
	export { AppHeader };
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