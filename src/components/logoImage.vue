<template>
  <img :src="img.src" :style="{width:props.width+'px'}" :title="img.title">
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps, reactive } from 'vue';

const props = defineProps({
  width: {
    type: String,
    default: '40'
  }
})
const store = useStore()
const emptySrc = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
const img = reactive({
  src: store.state.userInfo.avatar || emptySrc,
  title: store.state.userInfo.title
})
</script>
<style lang="scss" scoped>
img {
  border-radius: 8px;
}
</style>
