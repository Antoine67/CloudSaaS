//import VueCookie from 'vue-cookies'

export default function authHeader() {
    try {

      const storedUser = localStorage.getItem('ceseat_delivery_user');
      const jwt_cookie = JSON.parse(storedUser ? storedUser : "");
      
      console.log("parsing", jwt_cookie)
    
      if (jwt_cookie && jwt_cookie.accessToken) {
         return 'Bearer ' + jwt_cookie.accessToken ; 
        //return { 'x-access-token': user.accessToken };       
      } 
    }catch(e){
      console.log("Error while parsing JWT")
    }
    return null
    
  }