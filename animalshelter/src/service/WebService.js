import Axios from "axios";

const BASE_URL = "https://shenan-d-euw-api-svc.azurewebsites.net/";
const WebService = {
  post: (url, data, config) => {
    return Axios.post(BASE_URL + url, data);
  },

  get: (url, data) => {
    return Axios.get(BASE_URL + url, data);
  }
};

Object.freeze(WebService);
export default WebService;
