import http from "@/http-common";
import Order from "@/types/Order";

class OrdersService {
  getAllInProgress()  {
    return http.get("/orders?status=in-progress");
  }

  getAllPassed()  {
    return http.get("/orders?status=passed");
  }

  get(id: string) {
    return http.get(`/orders/${id}`);
  }

  getFromRestaurant(restaurantId: string) {
    return http.get(`/orders/restaurants/${restaurantId}`);
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

}

export default new OrdersService();