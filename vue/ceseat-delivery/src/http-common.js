import axios from "axios";
import authHeader from "@/services/auth-header";
export default axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "Content-type": "application/json",
        "Authorization": authHeader()
    }
});
//# sourceMappingURL=http-common.js.map