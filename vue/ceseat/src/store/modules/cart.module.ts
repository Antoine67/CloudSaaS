export const namespaced = true
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Menu from '@/types/Menu';
import Order from '@/types/Order';


const storedCard = localStorage.getItem('ceseat_cart');


const defaultCart = { 
  menus: [],
  status: "WAITING_PAYMENT",
  date:  `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
  pricing: {
    total : 0
  }
} as Order

//let lsCart = localStorage.getItem('cart');

@Module({ namespaced: true })
class CartModule extends VuexModule {
   
  public cart = storedCard ? JSON.parse(storedCard) : defaultCart

  @Mutation
  public ADD_TO_CART (newMenu: Menu) {
    // identify the pre-availability of the currently selected item and its quantity
    
    this.cart.menus.push(newMenu)
      
    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Mutation
  public REMOVE_FROM_CART (menu: Menu) {
    //this.cart = this.cart.filter((m: MenuItem) => m.menu.id != menu.id)
    for(const m of this.cart.menus) {
      if(m == menu) {
        this.cart.menus.splice(this.cart.menus.indexOf(m), 1)
        continue;
      }
    }

    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Action({ rawError: true })
  // add item to selected items list
  addItemToCart (item: Menu) {
    // the idea is to pass the item onto the store and filter from the main product list
    this.context.commit('ADD_TO_CART', item)
  }

  @Action({rawError: true})
  removeFromCart (item: Menu) {
    this.context.commit('REMOVE_FROM_CART', item)
  }


  get getOrder () {
    // universal getter to retrieve all selected menus
    return this.cart
  }

  get getNumberInCart() {
    return this.cart.menus.length
  }



}

export default CartModule;