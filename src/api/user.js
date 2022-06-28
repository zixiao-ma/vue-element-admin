import request from '../utils/request';
/*
 * @api_login 登录接口
 * @model 登录数据模型
 *  */
import md5 from 'md5';

const login = (data) => {
  data.password = md5(data.password);
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  }, true);
};
/*
 * @getUserInfo 获取用户信息
 *  */
const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'get'
  });
};
/*
* 获取项目功能
* 请求路径：/user/feature
* 请求方法：get
*  */
const getUserFeature = () => {
  return request({
    url: '/user/feature',
    method: 'GET'
  }, false)
}
export default {
  login,
  getUserInfo,
  getUserFeature
}
