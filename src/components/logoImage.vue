<template>
  <img v-if="userInfo" :src="userInfo.avatar" :style="{width:props.width+'px'}" :title="userInfo.title">
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const sotre = useStore()
const userInfo = sotre.getters.userInfo
const props = defineProps({
  width: {
    type: String,
    default: '40'
  }
})

</script>
<style lang="scss" scoped>
img {
  border-radius: 8px;
}
</style>
