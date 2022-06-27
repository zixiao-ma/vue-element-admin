<template>
  <div>

    <el-menu
      :collapse="props.collapse"
      active-text-color="#fff"
      background-color="none"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @close="handleClose"
      @open="handleOpen"
    >
      <el-menu-item class="menu_logo" index="1">
        <el-icon>
          <logo-image></logo-image>
        </el-icon>
        <span style="padding-left: 15px">{{ $store.state.userInfo.username }}</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>数据可视化</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>用户</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <setting/>
        </el-icon>
        <span>文章</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script setup>
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { defineProps } from 'vue'
import LogoImage from '@/components/logoImage';

const props = defineProps({
  collapse: {
    type: Boolean,
    defaults: () => false
  }
})
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.menu_logo {
  background: 0 0 !important;
}
</style>
