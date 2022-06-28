<template>
  <img v-if="userInfo" :src="img.src" :style="{width:props.width+'px'}" :title="img.title">
</template>

<script setup>
import { defineProps, reactive } from 'vue';
import { getItem } from '@/utils/storage';
import { USERINFO } from '@/constant';

const props = defineProps({
  width: {
    type: String,
    default: '40'
  }
})
const userInfo = reactive(getItem(USERINFO))
const emptySrc = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
const img = reactive({
  src: userInfo.avatar || emptySrc,
  title: userInfo.title
})
</script>
<style lang="scss" scoped>
img {
  border-radius: 8px;
}
</style>
