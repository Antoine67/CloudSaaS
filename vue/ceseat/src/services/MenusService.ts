import http from "@/http-common";
import Menu from "@/types/Menu";

class MenusServices {
  getAll()  {
    return http.get("/menus");
  }

  get(id: string) {
    return http.get(`/menus/${id}`);
  }

  getFromRestaurant(restaurantId: string) {
    return http.get(`/menus/restaurants/${restaurantId}`);
  }

  create(data: any) {
    return http.post("/menus", data);
  }

  update(id: any, data: any) {
    return http.put(`/menus/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/menus/${id}`);
  }

  deleteAll() {
    return http.delete(`/menus`);
  }
}

export default new MenusServices();