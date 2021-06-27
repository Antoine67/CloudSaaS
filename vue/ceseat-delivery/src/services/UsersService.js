import http from "@/http-common";
import authHeader from './auth-header';
class ProductsService {
    getAll() {
        return http.get("/users", { headers: authHeader() });
    }
    get(id) {
        return http.get(`/products/${id}`);
    }
    create(data) {
        return http.post("/products", data);
    }
    update(id, data) {
        return http.put(`/products/${id}`, data);
    }
    delete(id) {
        return http.delete(`/products/${id}`);
    }
    deleteAll() {
        return http.delete(`/products`);
    }
    findByTitle(title) {
        return http.get(`/products?title=${title}`);
    }
}
export default new ProductsService();
//# sourceMappingURL=UsersService.js.map