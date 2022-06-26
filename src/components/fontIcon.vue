<template>
  <span :class='className' :style="{'font-size':props.size+'px','color':props.color}"></span>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '16'
  },
  color: {
    type: String,
    default: '#000'
  }
})
const className = computed(() => {
  return `iconfont ${props.icon}`
})

</script>
<style lang="scss" scoped>
</style>
