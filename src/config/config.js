import axios from "axios";

export const baseURL = "http://164.92.248.254/api";

export const instance = axios.create({ baseURL });
