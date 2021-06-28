import axios from 'axios';
const API_URL = process.env.VUE_APP_AUTH_URL; //'http://localhost:4000/api/auth/';
class AuthService {
    login(email, password, roleIdentifier) {
        return axios
            .post(API_URL + 'login', {
            email: email,
            password: password,
            roleIdentifier: roleIdentifier
        })
            .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('ceseat_delivery_user', JSON.stringify(response.data));
                // eslint-disable-next-line
                //VueCookie.set('jwt', response.data, '1d', null, null, true )
                localStorage.setItem('ceseat_delivery_user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout() {
        localStorage.removeItem('ceseat_delivery_user');
        // eslint-disable-next-line
        //VueCookie.remove('jwt')
    }
    register(username, email, password, firstName, lastName, roleIdentifier) {
        return axios.post(API_URL + 'register', {
            username,
            email,
            password,
            firstName,
            lastName,
            roleIdentifier
        });
    }
}
export default new AuthService();
//# sourceMappingURL=AuthService.js.map