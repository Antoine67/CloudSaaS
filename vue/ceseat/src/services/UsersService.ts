import http from "@/http-common";
import Product from "@/types/User";
import authHeader from './auth-header';

class UsersService {
  getAll()  {
    return http.get("/users");
  }

  get(id: string) {
    return http.get(`/users/${id}`);
  }

  create(data: any) {
    return http.post("/users", data);
  }

  update(id: any, data: any) {
    return http.put(`/users/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/users/${id}`);
  }

  createCard(id: any, data: any) {
    return http.post(`/users/${id}/cards/`, data);
  }

  getCard(id: any, id_card: any) {
    return http.get(`/users/${id}/cards/${id_card}`);
  }

  deleteCard(id: any, id_card: any) {
    return http.delete(`/users/${id}/cards/${id_card}`);
  }

  getAllCards(id: any) {
    return http.get(`/users/${id}/cards`);
  }

  createAddress(id: any, data: any) {
    return http.post(`/users/${id}/addresses`, data);
  }

  updateAddress(id: any, address_id:any, data: any) {
    return http.put(`/users/${id}/addresses/${address_id}`, data);
  }

  updateSponsor(id: any, data: any) {
    return http.post(`/users/${id}/sponsor/`, data);
  }

  



}

export default new UsersService();