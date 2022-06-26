import request from './request';
/*
 * @api_login 登录接口
 * @model 登录数据模型
 *  */
import md5 from 'md5';

export const login = (model) => {
  model.password = md5(model.password);
  return request.post('sys/login', model);
};
