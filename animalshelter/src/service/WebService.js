import Axios from "axios";

const BASE_URL = "https://shenan-d-euw-api-svc.azurewebsites.net/";
const WebService = {
  config: {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`
    }
  },

  post(url, data) {
    return Axios.post(BASE_URL + url, data, this.config);
  },

  get(url) {
    return Axios.get(BASE_URL + url, this.config);
  }
};

Object.freeze(WebService);
export default WebService;
