import axios from 'axios';
axios.defaults.baseURL = 'http://xxx.com/xxx';

//统一处理结果
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default {
    install(Vue) {
        Vue.prototype.$http = axios;
        Vue.http = axios;
    },
    $http: axios
}
export const $http = axios;