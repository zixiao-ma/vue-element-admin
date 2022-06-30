<template>
  <el-dialog
    v-model="showDialog"
    :title="props.title"
    :width="props.width+'%'"
    draggable
  >
    <div class="dialogbody">
      <slot></slot>
    </div>
  </el-dialog>
</template>

<script>
import { defineExpose, defineProps, ref } from 'vue';

const showDialog = ref(false)
const props = defineProps({
  title: {
    type: String,
    default: '提示'
  },
  width: {
    type: Number,
    default: 30
  }
})
console.log(props)
const show = () => {
  showDialog.value = true
}
const hide = () => {
  showDialog.value = false
}
defineExpose({
  show, hide
})
</script>
<style scoped>
.dialogbody {
  margin-bottom: 25px;
}
</style>
