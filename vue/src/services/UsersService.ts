import http from "@/http-common";
import Product from "@/types/User";
import authHeader from './auth-header';

class ProductsService {
  getAll()  {
    return http.get("/users", { headers: authHeader() });
  }

  get(id: string) {
    return http.get(`/products/${id}`);
  }

  create(data: any) {
    return http.post("/products", data);
  }

  update(id: any, data: any) {
    return http.put(`/products/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(title: string) {
    return http.get(`/products?title=${title}`);
  }
}

export default new ProductsService();