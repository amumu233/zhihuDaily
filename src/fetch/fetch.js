import axios from 'axios'
import Qs from 'qs'

let config = {
    baseUrl: '/api',
    transfromRequest: [
        function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret
        }
    ],
    transformResponse: [
        function (data) {
            return data
        }
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charser=UTF-8'
    },
    timeout: 10000,
    responseType: 'json'
};

axios.interceptors.response.use(function (res) {
    return res.data
});

export function get(url) {
    return axios.get(url, config);
}

export function post(url, data) {
    return axios.post(url, data, config)
}