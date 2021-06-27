import { __decorate } from "tslib";
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import AuthService from '@/services/AuthService';
import jwt_decode from "jwt-decode";
const storedUser = localStorage.getItem('ceseat_delivery_user');
let AuthModule = class AuthModule extends VuexModule {
    constructor() {
        //public user =  VueCookie.get('jwt');
        //public status = this.user ? { loggedIn: true } : { loggedIn: false };
        super(...arguments);
        this.status = storedUser ? { loggedIn: true } : { loggedIn: false };
        this.user = storedUser ? JSON.parse(storedUser) : null;
        this.userData = this.user ? jwt_decode(this.user.accessToken) : null;
    }
    loginSuccess(user) {
        this.status.loggedIn = true;
        this.user = user;
        this.userData = jwt_decode(this.user.accessToken);
    }
    loginFailure() {
        this.status.loggedIn = false;
        this.user = null;
        this.userData = null;
    }
    logout() {
        this.status.loggedIn = false;
        this.user = null;
        this.userData = null;
    }
    registerSuccess() {
        this.status.loggedIn = false;
    }
    registerFailure() {
        this.status.loggedIn = false;
    }
    login(data) {
        return AuthService.login(data.email, data.password, data.roleIdentifier).then((user) => {
            this.context.commit('loginSuccess', user);
            return Promise.resolve(user);
        }, (error) => {
            this.context.commit('loginFailure');
            const message = (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return Promise.reject(message);
        });
    }
    signOut() {
        AuthService.logout();
        this.context.commit('logout');
    }
    register(data) {
        return AuthService.register(data.username, data.email, data.password, data.firstName, data.lastName, data.roleIdentifier).then(response => {
            this.context.commit('registerSuccess');
            return Promise.resolve(response.data);
        }, error => {
            this.context.commit('registerFailure');
            const message = (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return Promise.reject(message);
        });
    }
    get isLoggedIn() {
        return this.status.loggedIn;
    }
};
__decorate([
    Mutation
], AuthModule.prototype, "loginSuccess", null);
__decorate([
    Mutation
], AuthModule.prototype, "loginFailure", null);
__decorate([
    Mutation
], AuthModule.prototype, "logout", null);
__decorate([
    Mutation
], AuthModule.prototype, "registerSuccess", null);
__decorate([
    Mutation
], AuthModule.prototype, "registerFailure", null);
__decorate([
    Action({ rawError: true })
], AuthModule.prototype, "login", null);
__decorate([
    Action
], AuthModule.prototype, "signOut", null);
__decorate([
    Action({ rawError: true })
], AuthModule.prototype, "register", null);
AuthModule = __decorate([
    Module({ namespaced: true })
], AuthModule);
export default AuthModule;
//# sourceMappingURL=auth.module.js.map