import * as axios from "axios";

let baseURL;

baseURL = "https://api.exchangerate.host/latest";
const options = {
  withCredentials: true,
};

options.baseURL = baseURL;

export default axios.create(options);
