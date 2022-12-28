import axios from "axios";

/* Simple Axios HTTP Methods */

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
})

export const controller = new AbortController();

// axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

axiosInstance.interceptors.request.use(function(config){
    return config;
}, function(error){
    return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
});

export const axiosGet = (url, params = {}) => {
    return axiosInstance.get(url, {
        signal: controller.signal,
        params
    }).then(function(response){
        return response.status >= 200 && response.status < 400 ? 
               response.data : []; 
    }).catch(console.error);
}

export const axiosPost = (url, body) => {
    return axiosInstance.post(url, body)
    .then(function(response){
        console.log(response);
    }).catch(console.error);
}

// export const axiosDelete = () => {

// }

// export const axiosPut = () => {

// }