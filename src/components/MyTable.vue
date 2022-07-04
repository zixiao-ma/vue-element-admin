<template>
  <el-table :data="props.data" border row-key="id" style="width: 100%">
    <el-table-column
      v-for="(item,index) in props.rules"
      v-show="item.sort===index"
      :key="item.id"
      :align="item.align"
      :label="item.label"
      :prop="item.prop"
      :type="item.type"
      :width="item.width + 'px'"
    >
      <template v-if="item.slot" v-slot="{ row, $index, column }">
        <slot
          :column="column"
          :index="$index"
          :name="item.slot"
          :row="row"
        ></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  rules: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped></style>
