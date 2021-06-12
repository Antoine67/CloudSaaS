import { Model as BaseModel } from "vue-api-query";

export default class Model extends BaseModel {
  // Define a base url for a REST API
  baseURL() {
    return "http://localhost/api";
  }

  // Implement a default request method
  request(config: any) {
    return this.$http.request(config);
  }
}
