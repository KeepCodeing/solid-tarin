/**
 * 用于配置axios的实例
 */
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://www.softeem.xin:9999",
    timeout: 10000,
});

//请注意,这里并没有配置完成,后面还需要配置请求拦截和响应拦截

axiosInstance.interceptors.response.use(resp => {
    return Promise.resolve(resp.data);
}, error => {
    // 对响应错误做点什么
    // 正常情况下这里要给用户提示,但是我们今天还没有用到,我们明天会使用vant来完成这个操作
    return Promise.reject(error);
});

export default axiosInstance;