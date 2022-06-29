<template>
  <el-menu
    :collapse="props.collapse"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="1"
    router text-color="#fff">
    <template v-for="item in props.data" :key="item.id">
      <template v-if="!item.children || item.children.length == 0">
        <el-menu-item :index="item.path">

          <svg-icon :icon="item.meta.icon"></svg-icon>

          <span>{{ item[[props.name]] }}</span>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length > 0">
        <el-sub-menu :index="item.path">
          <template #title>

            <svg-icon :icon="item.meta.icon"></svg-icon>

            <span>{{ item[[props.name]] }}</span>
          </template>
          <deep-menu :data="item.children" :name="props.name"></deep-menu>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup>
import { defineProps } from 'vue';
import SvgIcon from '@/components/SvgIcon';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  name: {
    type: String,
    default: 'name'
  },
  collapse: {
    type: Boolean,
    default: false
  }
});

console.log(props.data);
</script>
<style scoped></style>
