import http from "@/http-common";
import Menu from "@/types/Menu";

class RoleEmployeesService {
  getAll()  {
    return http.get("/roleEmployees");
  }

  get(id: string) {
    return http.get(`/roleEmployees/${id}`);
  }

  create(data: any) {
    return http.post("/roleEmployees", data);
  }

  update(id: any, data: any) {
    return http.put(`/roleEmployees/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/roleEmployees/${id}`);
  }
}

export default new RoleEmployeesService();