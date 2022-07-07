<template>

  <el-menu
    :background-color="$store.getters.color"
    :collapse="collapse"
    active-text-color="#fff"
    class="el-menu-vertical-demo"
    default-active="1"
    mb-2
    router
    text-color="#bfcbd9"
    unique-opened
  >
    <menu-item v-for="(item,index) in props.data" :key="index" :tree="item"></menu-item>
  </el-menu>

</template>

<script setup>
import { defineProps } from 'vue';
import MenuItem from '@/layout/components/Sidebar/MenuItem';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  collapse: {
    type: Boolean,
    default: () => false
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-icon {
  display: block !important;
}
</style>
