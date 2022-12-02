import config from '../config'
import axios from 'axios'
import crypto from 'crypto'
const { baseUrl, appkey, appSecret } = config.logistics;

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: {
        appKey: appkey,
        'Content-type': 'application/json'
    }
});

function Md5Params(data) {
    if (!data) {
        return null;
    }
    let arr = Object.keys(data).sort(), obj = {};
    arr.forEach(item => {
        obj[item] = data[item];
    })
    let s = JSON.stringify(data);
    let content = s + appSecret;
    return crypto.createHash('md5').update(content).digest("hex")
}
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    switch (config.method) {
        case 'get':
        case 'delete':
            config.headers.sign = Md5Params(config.params)
            break;
        case 'post':
        case 'put':
            config.headers.sign = Md5Params(config.data)
            break;
    }
    // 在发送请求之前做些什么
    return config;

}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance