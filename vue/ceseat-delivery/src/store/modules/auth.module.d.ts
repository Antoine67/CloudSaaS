import { VuexModule } from 'vuex-module-decorators';
declare class AuthModule extends VuexModule {
    status: {
        loggedIn: boolean;
    };
    user: any;
    userData: unknown;
    loginSuccess(user: any): void;
    loginFailure(): void;
    logout(): void;
    registerSuccess(): void;
    registerFailure(): void;
    login(data: any): Promise<any>;
    signOut(): void;
    register(data: any): Promise<any>;
    get isLoggedIn(): boolean;
}
export default AuthModule;
