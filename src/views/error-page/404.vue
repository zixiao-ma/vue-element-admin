<template>
  <el-card>
    <el-result>
      <template #icon>
        <el-image
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20210417%2F0a1d45c23ed1470a806c98fc07e45918.png&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659532747&t=5aef8e3a1eb445588f133907e834c087"
          style="width: 400px; height: 400px"
        />
      </template>
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
      </template>
    </el-result>
  </el-card>
</template>

<script setup>

</script>
<style lang="scss" scoped>

</style>
