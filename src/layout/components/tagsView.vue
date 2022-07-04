<template>
  <div>
    <el-tag v-for="(tag,i) in tags" v-show="tag.title" :key="i" :closable="route.path!==tag.path"
            :type="route.path===tag.path?'':'info'"
            @click="$router.push(tag.path)" @close="delTag(i,tag.path)">{{ tag.title }}
    </el-tag>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore()
const route = useRoute()
// const router = useRouter()
console.log(route.path)
const tags = store.getters.tags
const delTag = (index, path) => {
  store.commit('tagView/delTag', index)
  /* if (path === route.path) {
    router.push(tags[index - 1].path)

  } */
}

</script>
<style lang="scss" scoped>
.el-tag {
  margin: 5px;
}
</style>
