<template>
  <el-card class="Excel_model">
    <el-button type="primary">Excel导入</el-button>
    <el-button type="success">Excel导出</el-button>
  </el-card>
  <el-card class="table_model">
    <my-table :data="tableList" :rules="tableRules">
      <template v-slot:avatar="{row}">
        <el-avatar :size="40" :src="row.avatar" shape="square"/>

      </template>
      <template v-slot:roleTag="{row}">
        <el-tag>{{ row.role[0].title }}</el-tag>
      </template>
      <template v-slot:time="{row}">
        {{ row.openTime }}
      </template>
      <template v-slot:footer="{row}">
        <el-button size="small"
                   type="primary"
                   @click="$router.push(`/user/info/${row._id}`)"
        >查看
        </el-button
        >
        <el-button size="small">
          角色
        </el-button
        >
        <el-button
          size="small"
          type="danger"
        >删除
        </el-button
        >
      </template>
    </my-table>
    <pagination :page-num="pageModel.page" :page-size="pageModel.size" :total="pageModel.total"
                @change="pageChange"></pagination>
  </el-card>
</template>
<script setup>
import userApi from '@/api/user'
import { reactive, ref } from 'vue';
import MyTable from '@/components/MyTable';
import Pagination from '@/components/pagination';

const pageModel = reactive({
  page: 1,
  size: 2
})

const tableList = ref([])
const getUserManage = async () => {
  try {
    console.log(pageModel)
    const res = await userApi.getUserManage(pageModel)
    console.log(res.list)
    tableList.value = res.list
    pageModel.total = res.total
  } catch (error) {

  }
}
getUserManage()
const pageChange = (val) => {
  pageModel.page = val.pageNum
  pageModel.size = val.pageSize
  getUserManage()
}
const tableRules = [
  {
    label: '#',
    type: 'index',
    width: '50'
  },
  {
    label: '姓名',
    prop: 'username'
  },
  {
    label: '联系方式',
    prop: 'mobile'
  },
  {
    label: '头像',
    prop: 'avatar',
    slot: 'avatar'
  },
  {
    label: '角色',
    prop: 'role',
    slot: 'roleTag'
  },
  {
    label: '开通时间',
    prop: 'openTime',
    slot: 'time'
  },
  {
    label: '编辑',
    prop: '',
    slot: 'footer',
    width: '300'
  }
]

</script>
<style lang="scss" scoped>
.Excel_model {
  display: flex;
  justify-content: flex-end;
}

.table_model {
  margin-top: 20px;
}

.el-avatar {
  background: 0 !important;
}
</style>
