import VueCookie from 'vue-cookie'

export default function authHeader() {
    const jwt = VueCookie.get('jwt'); //.getItem('user');
    let jwt = JSON.parse(jwt ? jwt : "");
  
    if (jwt && jwt.accessToken) {
       return { Authorization: 'Bearer ' + jwt.accessToken }; 
      //return { 'x-access-token': user.accessToken };       
    } else {
      return {};
    }
  }