import Axios from "axios";

export const HttpNodeService = Axios.create({
  baseURL: `http://localhost:7070/api/`,
});
