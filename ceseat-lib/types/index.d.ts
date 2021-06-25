declare module 'ceseat-lib' {
	import MenuCardItem from 'src/components/MenuCardItem.vue';
	import RestaurantCardItem from 'src/components/RestaurantCardItem.vue';
	import LoginForm from 'src/components/LoginForm.vue';
	import ProductItem from 'src/components/ProductItem.vue';
	import AppHeader from 'src/components/AppHeader.vue';
    const Components: {
	    MenuCardItem: any;
	    LoginForm: any;
	    ProductItem: any;
		RestaurantCardItem: any;
		AppHeader : any;
	};
	export { MenuCardItem };
	export { LoginForm };
	export { ProductItem };
	export { RestaurantCardItem };
	export { AppHeader }
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