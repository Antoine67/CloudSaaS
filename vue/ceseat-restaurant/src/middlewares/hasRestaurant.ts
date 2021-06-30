//import VueCookie from 'vue-cookies'

export default function hasRestaurant({ next, router } : any) {

    const storedUser = localStorage.getItem('ceseat_restaurant_user');
    const jwt_cookie = JSON.parse(storedUser ? storedUser : "");
    console.log();
      
    if (!jwt_cookie || !jwt_cookie.restaurantId) {
      return router.push({ name: 'NoRestaurantDashboard' });
    }
    return next();
  }