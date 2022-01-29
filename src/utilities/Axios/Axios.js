import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://oa-url-shortener.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosGet = (url,data) => Axios.get(url,data);

export const AxiosPost = (url, body) => Axios.post(url, body);
