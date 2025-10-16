import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: "https://viacep.com.br/ws"
  });
}