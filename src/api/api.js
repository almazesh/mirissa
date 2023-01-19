import { instance } from "../config/config";


export const GET_ACTUAL_CATALOG = () => instance.get("/actual/");

export const GET_MARKET_PHOTO = () => instance.get("/marketphoto/")

export const GET_CONTACTS = () => instance.get('/contacts/')