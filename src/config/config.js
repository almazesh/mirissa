import axios from "axios";

export const baseURL = "https://www.mirissa-server.kg/api";

export const instance = axios.create({ baseURL });
