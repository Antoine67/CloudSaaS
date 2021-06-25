import axios from "axios";
import authHeader from "@/services/auth-header"

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL, //"http://localhost:8090/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": authHeader()
  }
});