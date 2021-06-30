import http from "@/http-common";
import Menu from "@/types/Menu";

class OrdersServices {
  getAll()  {
    return http.get("/orders?status=string");
  }

  get(id: string) {
    return http.get(`/orders/${id}`);
  }

  create(data: any) {
    return http.post("/orders", data);
  }

  update(id: any, data: any) {
    return http.put(`/orders/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/orders/${id}`);
  }

  deleteAll() {
    return http.delete(`/orders`);
  }

  findByTitle(title: string) {
    return http.get(`/orders?title=${title}`);
  }
}

export default new OrdersServices();