import axios from "axios";

const api = axios.create({
  baseURL: "https://jallad-basic-api-server.herokuapp.com/itemsRoute",
});
export default api;
