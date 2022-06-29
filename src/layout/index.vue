<template>
  <div class="app-wrapper">
    <sidebar class="sidebar"></sidebar>
    <div class="main-container">
      <div class="fixedNav">

        <navbar class="navbar"></navbar>
        <tags-view class="tagsView"></tags-view>
      </div>
      <app-main class="appmain"></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar/index'
import TagsView from '@/components/TagsView'; </script>
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

    .fixedNav {
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100% - 210px);
      background-color: #fff;
    }

    .navbar {
      height: 50px;
      border-bottom: 1px solid #ddd;
      padding: 0 10px;
    }

    .tagsView {
      height: 30px;
      padding: 0 10px;
      border-bottom: 1px solid #ddd;
      line-height: 30px;
    }

    .appmain {
      box-sizing: border-box;
      padding: 20px;
      height: calc(100% - 82px);
      overflow-y: auto;
      margin-top: 82px;
    }
  }
}

</style>
