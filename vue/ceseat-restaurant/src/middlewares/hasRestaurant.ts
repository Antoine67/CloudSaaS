//import VueCookie from 'vue-cookies'
import store from '../store'

export default function hasRestaurant({ next, router } : any) {

    const storedUser = localStorage.getItem('ceseat_restaurant_user');
    const jwt_cookie = JSON.parse(storedUser ? storedUser : "");
    
    if (!jwt_cookie || !store.state.Auth.userData.restaurantId) {
      return router.push({ name: 'NoRestaurantDashboard' });
    }
    return next();
  }