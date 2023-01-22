import { instance } from "../config/config";


export const GET_ACTUAL_CATALOG = () => instance.get("/actual/");

export const GET_MARKET_PHOTO = () => instance.get("/marketphoto/")

export const GET_CONTACTS = () => instance.get('/contacts/')

export const GET_PRODUCTS = () => instance.get('/products/')

export const GET_SINGLE_PRODUCT = (id) => instance.get(`/products/${id}/`)

export const POST_REVIEW = (data) => instance.post('/reviews/', data)

export const GET_CONTEST = () => instance.get('/contests/')

export const GET_DISCOUNTS = () => instance.get('/discounts/')

export const GET_SINGLE_DISCOUNTS = (id) => instance.get(`/discounts/${id}`)