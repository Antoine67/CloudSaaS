import http from "@/http-common";
import Product from "@/types/Product";

class ProductsService {
  getAll()  {
    return http.get("/products");
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