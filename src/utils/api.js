import axios from "axios";

export function getToken() {
  return localStorage.getItem("af-token");
}

export default function api() {
  return axios.create({
    baseURL: "https://anywhere-fitness04.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("af-token"),
    },
  });
}
