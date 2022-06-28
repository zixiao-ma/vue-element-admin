<template>
  <div class="app-wrapper">
    <sidebar class="sidebar"></sidebar>
    <div class="main-container">
      <div class="fixedNav">
        <navbar class="navbar"></navbar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar/index'</script>
<style lang="scss" scoped>
@import '../styles/variables.module.scss';

.app-wrapper {
  height: 100%;
  position: relative;

  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    overflow-y: auto;
    height: 100%;
    width: 210px;
    background-color: $menuBg;
  }

  .main-container {
    position: absolute;
    right: 0;
    width: calc(100% - 210px);
    background-color: #fff;
    height: 100%;

    .navbar {
      height: 50px;
      border-bottom: 1px solid #ddd;
    }
  }
}

</style>
