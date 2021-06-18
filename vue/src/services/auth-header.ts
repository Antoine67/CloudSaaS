import VueCookie from 'vue-cookie'

export default function authHeader() {
    const jwt_cookie = VueCookie.get('jwt'); //.getItem('user');
    let jwt = JSON.parse(jwt_cookie ? jwt_cookie : "");
  
    if (jwt && jwt.accessToken) {
       return { Authorization: 'Bearer ' + jwt.accessToken }; 
      //return { 'x-access-token': user.accessToken };       
    } else {
      return {};
    }
  }