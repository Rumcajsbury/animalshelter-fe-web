import Axios from "axios";

const BASE_URL = "https://shenan-d-euw-api-svc.azurewebsites.net/";
const WebService = {
  config() {
    let headers = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    };
    return headers;
  },

  post(url, data) {
    return Axios.post(BASE_URL + url, data, this.config());
  },

  get(url) {
    return Axios.get(BASE_URL + url, this.config());
  },

  put(url, data) {
    return Axios.put(BASE_URL + url, data, this.config());
  }
};

Object.freeze(WebService);
export default WebService;
