<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      :collapse="menuCollapse"
      :style="{ backgroundColor: variables.menuBg,width:menuCollapse?'64px':'210px'}"

      class="sidebar-container"
    />
    <div :style="{marginLeft:menuCollapse?'64px':'210px'}" class="main-container">
      <div :style="{width:menuCollapse?'96%':'86%'}" class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar @collapse="collapse"/>
      </div>
      <!-- 内容区 -->
      <app-main/>
    </div>
  </div>
</template>

<script setup>

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import variables from '@/styles/variables.module.scss'
import { ref } from 'vue'

const menuCollapse = ref(false)
const collapse = (bool) => {
  menuCollapse.value = bool
}

</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
}

#guide-sidebar {
}
</style>
