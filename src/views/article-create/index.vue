<template>
  <el-card>
    <el-input v-model="articleName" placeholder="文章名称"></el-input>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="markdown" name="first">
        <markdown></markdown>
      </el-tab-pane>
      <el-tab-pane label="editor" name="second">Config</el-tab-pane>
      <el-button type="primary">提交</el-button>
    </el-tabs>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import Markdown from '@/views/article-create/components/Markdown';

const activeName = ref('first')
const articleName = ref('')
</script>
<style lang="scss" scoped>
.el-card {
  padding: 20px;
}
</style>
