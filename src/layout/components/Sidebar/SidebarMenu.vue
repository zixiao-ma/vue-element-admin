<template>
  <div>
    <deep-menu :collapse="props.closable" :data="menus" name="name"></deep-menu>
  </div>

</template>

<script setup>
import { defineProps } from 'vue'
import DeepMenu from '@/layout/components/Sidebar/deepMenu';

const menus = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: 'profile',
      icon: 'user'
    }
  },
  {
    path: '/user',
    redirect: '/user/manage',
    name: 'user',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: 'roleList',
          icon: 'role'
        },
        children: []
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: 'permissionList',
          icon: 'permission'
        },
        children: []
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    redirect: '/article/ranking',
    meta: {
      title: 'article',
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
          title: 'articleRanking',
          icon: 'article-ranking'
        },
        children: []
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        },
        children: []
      }
    ]
  }
];
const props = defineProps({
  collapse: {
    type: Boolean,
    defaults: () => false
  }
})

</script>
<style lang="scss" scoped>
.menu_logo {
  background: 0 0 !important;
}
</style>
