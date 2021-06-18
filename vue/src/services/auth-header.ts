export default function authHeader() {
    const storedUser = this._vm.$cookies.get('jwt'); //.getItem('user');
    let user = JSON.parse(storedUser ? storedUser : "");
  
    if (user && user.accessToken) {
       return { Authorization: 'Bearer ' + user.accessToken }; 
      //return { 'x-access-token': user.accessToken };       
    } else {
      return {};
    }
  }