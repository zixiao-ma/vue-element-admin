<template>
  <template v-if="props.tree.children&&props.tree.children.length>0">

    <el-sub-menu :index="props.tree.path">
      <template #title>
        <el-icon>
          <svg-icon :icon="props.tree.meta.icon"></svg-icon>
        </el-icon>
        <span>{{ props.tree.meta.title }}</span>
      </template>
      <Item v-for="item in props.tree.children" :key="item" :tree="item"></Item>
    </el-sub-menu>
  </template>

  <template v-else>
    <el-menu-item :index="props.tree.path">
      <el-icon>
        <svg-icon :icon="props.tree.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ props.tree.meta.title }}</span>
    </el-menu-item>
  </template>

</template>

<script setup>
import { defineProps } from 'vue';
import SvgIcon from '@/components/SvgIcon';

const props = defineProps({
  tree: {
    type: Object,
    default: () => {
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
