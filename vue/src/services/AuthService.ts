import axios from 'axios';
import VueCookie from 'vue-cookies'

const API_URL = process.env.VUE_APP_AUTH_URL;//'http://localhost:4000/api/auth/';

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + 'login', {
        email: email,
        password : password
      })
      .then(response => {
        if (response.data.accessToken) {
          //localStorage.setItem('user', JSON.stringify(response.data));
          VueCookie.set('jwt', response.data, '1d', null, null, true )
        }

        return response.data;
      });
  }

  logout() {
    //localStorage.removeItem('user');
    VueCookie.remove('jwt')
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + 'register', {
      username,
      email,
      password
    });
  }
}

export default new AuthService();