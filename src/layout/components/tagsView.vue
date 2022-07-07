<template>
  <div>
    <el-tag
      v-for="(tag,i) in tags"
      v-show="tag.title" :key="i"
      :class="route.path===tag.path?'white':''"
      :closable="route.path!==tag.path"
      :style="{background:route.path===tag.path?$store.getters.color:'',border:`1px solid ${$store.getters.color}`}"
      type="info"
      @click="toPath(tag.path,$event)" @close="delTag(i,tag.path)">
      {{ tag.title }}

    </el-tag>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore()
const route = useRoute()
const router = useRouter()
const tags = store.getters.tags
const delTag = (index, path) => {
  store.commit('tagView/delTag', index)
}
const toPath = (path, e) => {
  router.push(path)
}

</script>
<style lang="scss" scoped>
.el-tag {
  margin: 5px;
  color: #000;
  border-radius: 0px;
  background-color: #fff;

}

.el-tag--el-tag-hover-color {
  color: red;
}

::v-deep .el-tag .el-tag__close {
  color: #000 !important;
}

.white {
  color: #fff !important;
}

</style>
