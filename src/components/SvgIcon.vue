<template>
  <div
    v-if="isExternalIcon"
    :class="className"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />

  <svg v-else :class="className" aria-hidden="true" class="svg-icon">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { isExternal } from '../utils/validate'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }

})
const isExternalIcon = computed(() => isExternal(props.icon))
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
const iconName = computed(() => `#icon-${props.icon}`)
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;

}
</style>
