import VueCookie from 'vue-cookies'

export default function authHeader() {
    try {
      // tslint:disable-next-line
      const jwt_cookie = VueCookie.get('jwt'); //.getItem('user');
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