<template>
  <my-table :data="roleList" :rules="tableRules">

  </my-table>
</template>
<script setup>
import userApi from '@/api/user'
import { ref } from 'vue';
import MyTable from '@/components/MyTable';

const roleList = ref([])
const getRoleList = async () => {
  const res = await userApi.getPermissionList()
  roleList.value = res
}
getRoleList()

const tableRules = [
  {
    label: '权限名称',
    prop: 'permissionName'
  },
  {
    label: '权限标识',
    prop: 'permissionMark'
  },
  {
    label: '权限描述',
    prop: 'permissionDesc'

  }
]
</script>
<style lang="scss" scoped>

</style>
