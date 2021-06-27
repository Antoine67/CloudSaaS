declare class AuthService {
    login(email: string, password: string, roleIdentifier: string): Promise<any>;
    logout(): void;
    register(username: string, email: string, password: string, firstName: string, lastName: string, roleIdentifier: string): Promise<import("axios").AxiosResponse<any>>;
}
declare const _default: AuthService;
export default _default;
