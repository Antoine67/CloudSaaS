declare class MenusServices {
    getAll(): Promise<import("axios").AxiosResponse<any>>;
    get(id: string): Promise<import("axios").AxiosResponse<any>>;
    create(data: any): Promise<import("axios").AxiosResponse<any>>;
    update(id: any, data: any): Promise<import("axios").AxiosResponse<any>>;
    delete(id: any): Promise<import("axios").AxiosResponse<any>>;
    deleteAll(): Promise<import("axios").AxiosResponse<any>>;
    findByTitle(title: string): Promise<import("axios").AxiosResponse<any>>;
}
declare const _default: MenusServices;
export default _default;
