import axios from "axios";

export const baseURL = "http://heroleague.ml/api";

export const instance = axios.create({ baseURL });
