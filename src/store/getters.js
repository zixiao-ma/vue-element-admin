export const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo || {},
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) === '{}'
  },
  tags: state => state.tagView.tags,
  language: state => state.language
}
