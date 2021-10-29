import { Toast } from 'antd-mobile';
import axios from 'axios';
import { history } from 'umi';

const Request = axios.create({
  timeout: 10 * 1000,
});

// 拦截请求
Request.interceptors.request.use(
  async (config) => {
    // 请求过滤
    if (config.params) {
      Object.keys(config.params).forEach((key) => {
        if (config.params[key] === '' || config.params[key] === undefined) {
          delete config.params[key];
          if (config.method === 'get' && config.params[key] === null) {
            delete config.params[key];
          }
        }
      });
    }

    return config;
  },
  (err) => Promise.reject(err),
);

Request.interceptors.response.use(
  (respose) => {
    const res = respose.data;
    if (!res) {
      Toast.show({
        icon: 'fail',
        content: '网络错误, 稍后再试',
      });
      history.push('/error/500');
    } else {
      if (res.success || res.status === 'success') {
        return res;
      }
      Toast.show({
        icon: 'fail',
        content: '网络错误, 稍后再试',
      });
    }
    return null;
  },
  (err) => Promise.reject(err),
);

export default Request;
