<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in list" v-show="item.title" :key="item" :to="item.path">{{
        item.title
      }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()
const list = computed(() => {
  const arr = [];
  route.matched.forEach(item => {
    arr.push(item.meta)
  })
  return arr
})
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  display: inline-block;
  margin-left: 10px;

  .el-breadcrumb-item {
    transition: all .3s;
  }
}
</style>
