export const namespaced = true
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Menu from '@/types/Menu';
import Order from '@/types/Order';


const storedCard = localStorage.getItem('ceseat_cart');


const defaultCart = { 
  menus: [],
  status: "WAITING_PAYMENT",
  date:  new Date(),
  pricing: {
    total : 0
  },
  delivered : false
} as Order

//let lsCart = localStorage.getItem('cart');

@Module({ namespaced: true })
class CartModule extends VuexModule {
   
  public cart = storedCard ? JSON.parse(storedCard) : defaultCart

  @Mutation
  public ADD_TO_CART (newMenu: Menu) {
    // identify the pre-availability of the currently selected item and its quantity
    if(this.cart.restaurant_id  && newMenu.restaurant_id != this.cart.restaurant_id) {
      console.log("Erreur : seulement une commande par restaurant à la fois")
      return
    }

    this.cart.menus.push(newMenu)
    this.cart.restaurant_id = newMenu.restaurant_id
      
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

  @Mutation
  public CLEAR_CART () {
    this.cart = defaultCart
    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Mutation
  public UPDATE_PRICING (newMenu: Menu) {
    let total = this.cart.menus.reduce((a: any, b: any) => a + (b['price'] || 0), 0);
    
    //TODO dynamic fees
    this.cart.pricing.commision_fees = total / 100
    this.cart.pricing.delivering_fees = 2
    this.cart.pricing.discount = 1
    this.cart.pricing.restaurant_fees = total //store order pricing

    total = (total + this.cart.pricing.commision_fees + this.cart.pricing.delivering_fees) * this.cart.pricing.discount

    this.cart.pricing.total = total
    
      
    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Action({ rawError: true })
  // add item to selected items list
  addItemToCart (item: Menu) {
    // the idea is to pass the item onto the store and filter from the main product list
    this.context.commit('ADD_TO_CART', item)
    this.context.commit('UPDATE_PRICING')
  }

  @Action({rawError: true})
  removeFromCart (item: Menu) {
    this.context.commit('REMOVE_FROM_CART', item)
    this.context.commit('UPDATE_PRICING')
  }

  @Action({rawError: true})
  clearCart () {
    this.context.commit('CLEAR_CART')
    this.context.commit('UPDATE_PRICING')
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