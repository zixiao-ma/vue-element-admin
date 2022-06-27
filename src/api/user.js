import request from '../utils/request';
/*
 * @api_login 登录接口
 * @model 登录数据模型
 *  */
import md5 from 'md5';

export const login = (data) => {
  data.password = md5(data.password);
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  });
};
/*
 * @getUserInfo 获取用户信息
 *  */
export const getUserInfo = () => {
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
export const getUserFeature = () => {
  return request({
    url: '/user/feature',
    method: 'GET'
  })
}
