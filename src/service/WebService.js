import Axios from "axios";

const BASE_URL = "https://shenan-d-euw-api-svc.azurewebsites.net/";
const WebService = {
  config() {
    return {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    };
  },

  post(url, data) {
    return Axios.post(BASE_URL + url, data, this.config());
  },

  postWithHeaders(url, data, headers) {
    return Axios.post(BASE_URL + url, data, headers);
  },

  get(url) {
    return Axios.get(BASE_URL + url, this.config());
  },

  put(url, data) {
    return Axios.put(BASE_URL + url, data, this.config());
  },

  delete(url) {
    return Axios.delete(BASE_URL + url, this.config());
  }
};

Object.freeze(WebService);
export default WebService;
