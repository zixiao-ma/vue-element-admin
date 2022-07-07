<template>
  <my-table :data="roleList" :rules="tableRules">
    <template #footer>
      <el-button :style="{background:$store.getters.color,border:`1px solid ${$store.getters.color}`}" size="small"
                 type="primary">分配权限
      </el-button>
    </template>
  </my-table>
</template>
<script setup>
import userApi from '@/api/user'
import { ref } from 'vue';
import MyTable from '@/components/MyTable';

const roleList = ref([])
const getRoleList = async () => {
  const res = await userApi.getRoleList()
  roleList.value = res
}
getRoleList()

const tableRules = [
  {
    label: '序号',
    type: 'index',
    width: '100'
  },
  {
    label: '名称',
    prop: 'title'
  },
  {
    label: '描述',
    prop: 'describe'
  },
  {
    label: '操作',
    prop: '',
    slot: 'footer'

  }
]
</script>
<style lang="scss" scoped>

</style>
