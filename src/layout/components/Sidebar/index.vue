<template>
  <div>
    <div class="navHeader">
      <logo-image></logo-image>
      <span>{{ username }}</span>
    </div>
    <deep-menu :collapse="props.collapse" :data="menus"></deep-menu>
  </div>
</template>
<script setup>
import { defineProps, reactive } from 'vue'
import DeepMenu from '@/layout/components/Sidebar/deepMenu';
import LogoImage from '@/components/logoImage';
import { useStore } from 'vuex';
// import { filterRouter } from '@/utils/FilterRouter';
// console.log(filterRouter())
const store = useStore()
const { username } = store.getters.userInfo
const props = defineProps({
  collapse: {
    type: Boolean,
    defaults: () => false
  }
})
const menus = reactive([
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    },
    children: []
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      }
    ]
  }
]);
</script>
<style lang="scss">
.navHeader {
  display: flex;
  align-items: center;
  padding: 10px;

  span {
    color: #fff;
    margin-left: 10px;
  }
}
</style>
