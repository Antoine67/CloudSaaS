import http from "@/http-common";
import Employee from "@/types/address";
import Menu from "@/types/Menu";

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

  getEmployees(id: string) {
    return http.get(`/restaurants/${id}/users`);
  }

  createEmployees(id: string, id_2: string) {
    return http.post(`/restaurants/${id}/users/${id_2}`);
  }

  deleteEmployees(id: string, id_2: string) {
    return http.delete(`/restaurants/${id}/users/${id_2}`);
  }

  updateEmployee(id: string, id_2: string, data: any) {
    console.log("flag4", data)
    return http.put(`/restaurants/${id}/users/${id_2}`, data);
  }
}

export default new RestaurantsService();