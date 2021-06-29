export const namespaced = true
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Menu from '@/types/Menu';
import EOrderState from '@/types/EOrderState';

const storedCard = localStorage.getItem('ceseat_cart');

export interface MenuItem {
    menu : Menu;
    quantity: number;
    status: EOrderState;
}

//let lsCart = localStorage.getItem('cart');

@Module({ namespaced: true })
class CartModule extends VuexModule {


  
  //public cart: MenuItem[] = []
  public cart = storedCard ? JSON.parse(storedCard) : [];


  @Mutation
  public ADD_TO_CART (newMenu: Menu) {
    
    // identify the pre-availability of the currently selected item and its quantity
    const item : MenuItem | undefined = this.cart.find((m: any) => m.menu.id === newMenu.id)
    console.log("item", item)
    if (item == undefined) {
      this.cart.push({menu: newMenu, quantity: 1, status: EOrderState.WAITING_PAYMENT})
    } else {
      item.quantity = item.quantity + 1
    }
    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Mutation
  public REMOVE_ONE_FROM_COUNT (oldMenu: Menu) {
    const item = this.cart.find((m: any) => m.menu.id === oldMenu.id)
    item!.quantity -= 1
    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Mutation
  public REMOVE_FROM_CART (menu: Menu) {
    this.cart = this.cart.filter((m: MenuItem) => m.menu.id != menu.id)
    localStorage.setItem('ceseat_cart', JSON.stringify(this.cart));
  }

  @Action({ rawError: true })
  // add item to selected items list
  addItemToCart (item: Menu) {
    // the idea is to pass the item onto the store and filter from the main product list
    this.context.commit('ADD_TO_CART', item)
  }

  @Action({rawError: true})
  removeOneFromCount (amount: Menu) {
    this.context.commit('REMOVE_ONE_FROM_COUNT', amount)
  }

  @Action({rawError: true})
  removeFromCart (item: Menu) {
    this.context.commit('REMOVE_FROM_CART', item)
  }


  get getCart () {
    // universal getter to retrieve all selected menus
    return this.cart
  }

  get getNumberInCart() {
    return this.cart.reduce((a: any, b:any) => a + (b['quantity'] || 0), 0);
  }

  
  get getMenuById () {
    return (id: number) => {
        return this.cart.find((menu: any) => menu.id === id)
    }
  }

}

export default CartModule;




