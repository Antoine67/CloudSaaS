import http from "@/http-common";
import Restaurant from "@/types/Restaurant";

class RestaurantsService {
  getAll()  {
    return http.get("/restaurants");
  }

  get(id: string) {
    return http.get(`/restaurants/${id}`);
  }

  create(data: any) {
    return http.post("/restaurants", data);
  }

  update(id: any, data: any) {
    return http.put(`/restaurants/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/restaurants/${id}`);
  }

  deleteAll() {
    return http.delete(`/restaurants`);
  }
}

export default new RestaurantsService();