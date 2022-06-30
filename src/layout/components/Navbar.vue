<template>
  <div class="nav">
    <div class="left"></div>
    <div class="right">
      <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="40" :src="src" shape="square"/>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/')">首页</el-dropdown-item>
            <el-dropdown-item>课程主页</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>

          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()
const src = store.getters.userInfo.avatar
const logout = () => {
  store.commit('user/loginOut')
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
</style>
