<template>
  <div>
    <el-menu
      :default-active="$route.path"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      router
      text-color="#fff"
    >

      <Item v-for="item in props.data" :key="item" :tree="item"></Item>
    </el-menu>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Item from '@/layout/components/Sidebar/Item';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>

</style>
