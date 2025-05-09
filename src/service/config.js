import  axios from 'axios';
import {manageLocalStorage } from '../common/utils';
import { KEY_ACCESS_TOKEN } from '../common/constants';
const  BASE_URL = "https://shop.cyberlearn.vn";


export const axiosWithAuth = axios.create({

    baseURL:BASE_URL,

    timeout:60*30*1000,
})

export const axiosWithout = axios.create({

    baseURL:BASE_URL,

    timeout:60*30*1000,
})

axiosWithAuth.interceptors.request.use((config) => {
    config.headers.set(
        "Authorization", 
        `Bearer ${manageLocalStorage.get(KEY_ACCESS_TOKEN)}`);
    return config;
})
