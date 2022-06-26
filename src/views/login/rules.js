export const validatorPwd = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入密码！'));
  }
  if (value.length > 100) {
    return callback(new Error('密码最大为6位！'));
  }
  return callback();
};
