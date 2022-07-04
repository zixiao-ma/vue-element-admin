import request from '@/utils/request';

const getArticle = (data) => {
  return request({
    url: '/article/list',
    method: 'get',
    data
  })
}
const getArticleDetail = (data) => {
  return request({
    url: '/article/' + data,
    method: 'get'
  })
}
export default {
  getArticle,
  getArticleDetail
}
