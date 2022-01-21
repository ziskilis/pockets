import axios from "axios";
import { BASE_URL } from "../constants/constants";

const $host = axios.create({
    baseURL: BASE_URL
})

const $authHost = axios.create({
    baseURL: BASE_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
