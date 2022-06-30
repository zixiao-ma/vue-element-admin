export const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo || '',
  menuRole: state => state.user.userInfo.permission.menus
}
