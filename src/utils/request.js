import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { ElMessage } from 'element-plus';
import md5 from 'md5';
import store from '@/store/index';

Nprogress.configure({ showSpinner: false });
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 6000
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // TODO 添加token
    Nprogress.start();
    config.headers.Authorization = `Bearer ${store.getters.getToken}`;
    const { icode, time } = getTestICode();
    config.headers.icode = icode;
    config.headers.codeType = time;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    Nprogress.done();
    const {
      data: { data, message },
      status
    } = response;
    if (status === 200 || status === 201) {
      if (!data) {
        ElMessage.error(message);
        return Promise.reject(message);
      }
      ElMessage.success(message);
      return data;
    }
  },
  function (error) {
    // 对响应错误做点什么
    const msg = error.toString();
    if (msg.includes('NetWorke error')) {
      ElMessage.error('网络错误！请检查您的网络').then(() => {
        return Promise.reject(error);
      });
    }
    if (msg.includes('Timeout')) {
      ElMessage.error('请求超时！请检查您的网络').then(() => {
        return Promise.reject(error);
      });
    }
    const { status } = error.response;
    switch (status) {
      case 401:
        ElMessage.error('Token超时，没有提供认证信息').then(() => {
          return Promise.reject(error);
        });
        break;
      case 500:
        ElMessage.error('服务器错误').then(() => {
          return Promise.reject(error);
        });
        break;
      case 503:
        ElMessage.error('服务暂时不可用').then(() => {
          return Promise.reject(error);
        });
        break;
      case 408:
        ElMessage.error('客户端请求超时').then(() => {
          return Promise.reject(error);
        });
        break;
    }
  }
);

// 实现code
function getTestICode () {
  const now = parseInt(Date.now() / 1000);
  const code = now + 'LGD_Sunday-1991';
  return {
    icode: md5(code),
    time: now
  };
}

export default instance;
