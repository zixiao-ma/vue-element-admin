<template>
  <div>
    <h1>{{ detail.title }}</h1>
    <p>作者：<span>{{ detail.author }}</span> 发布时间：<span>{{
        dayjs(detail.publicDate / 100 * 100).format("YYYY-MM-DD")
      }}</span></p>
    <hr>
    <p>{{ detail.desc }}</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import ArticleApi from '@/api/article'
import { ref } from 'vue';
// dayjs(detail.publicDate)
import dayjs from 'dayjs';

const route = useRoute()
const id = route.params.id
const detail = ref({})
const loadDetail = async () => {
  const res = await ArticleApi.getArticleDetail(id)
  console.log(res)
  detail.value = res
}
loadDetail()
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}

p {
  font-size: 14px;
}

span {
  color: gray;
  margin: 0 5px;
}
</style>
