//import VueCookie from 'vue-cookies'

export default function auth({ next, router } : any) {

  const storedUser = localStorage.getItem('ceseat_restaurant_user');
  const jwt_cookie = JSON.parse(storedUser ? storedUser : "");

    
  if (!jwt_cookie) {
    return router.push({ name: 'Dashboard' });
  }
  return next();
}