import axios from "axios";

export const baseURL = "https://mirissa.pythonanywhere.com/api";

export const instance = axios.create({ baseURL });
