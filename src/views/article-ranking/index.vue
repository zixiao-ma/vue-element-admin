<template>
  <el-card>
    <div class="header">
      <b>动态展示</b>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="排名"/>
        <el-checkbox label="标题"/>
        <el-checkbox label="作者"/>
        <el-checkbox label="发布时间"/>
        <el-checkbox label="内容简介"/>
        <el-checkbox label="操作"/>
      </el-checkbox-group>
    </div>

  </el-card>
  <el-card style="margin-top: 10px">
    <my-table :data="ArticleList" :rules="tableRules">
      <template v-slot:time="{row}">
        {{ dayjs(row.publicDate * 100 / 100).format("YYYY-MM-DD") }}
      </template>
      <template v-slot:footer="{row}">
        <el-button :style="{background:$store.getters.color,border:`1px solid ${$store.getters.color}`}" size="small"
                   type="primary"
                   @click="$router.push(`/article/${row._id}`)">
          查看
        </el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </my-table>
    <pagination :page-num="pageList.page" :page-size="pageList.size" :total="pageList.total"
                @change="pageChange"></pagination>
  </el-card>
</template>

<script setup>

import ArticleApi from '@/api/article'
import { reactive, ref, watch } from 'vue';
import MyTable from '@/components/MyTable';
import Pagination from '@/components/pagination';
import dayjs from 'dayjs';

const pageList = reactive({
  page: 1,
  size: 5,
  total: 0
})
const ArticleList = ref([])
const getArticleList = async () => {
  const res = await ArticleApi.getArticle(pageList)
  console.log(res)
  ArticleList.value = res.list
  pageList.total = res.total
}
const pageChange = (val) => {
  pageList.page = val.pageNum
  pageList.size = val.pageSize
  getArticleList()
}
getArticleList()
console.log(ArticleList.value)
const checkList = ref(['排名', '标题', '作者', '发布时间', '内容简介', '操作'])

const options = [
  {
    label: '排名',
    prop: 'ranking',
    width: '80',
    sort: 0
  },
  {
    label: '标题',
    prop: 'title',
    sort: 1
  },
  {
    label: '作者',
    prop: 'author',
    sort: 2
  },
  {
    label: '发布时间',
    prop: 'publicDate',
    sort: 3,
    slot: 'time'
  },
  {
    label: '内容简介',
    prop: 'desc',
    sort: 4
  },
  {
    label: '操作',
    slot: 'footer',
    sort: 5
  }
]
const tableRules = ref([])
watch(checkList, (value, oldValue) => {
  loadList()
})
loadList()

function loadList () {
  tableRules.value = []
  checkList.value.forEach(item => {
    tableRules.value.push(...options.filter(val => item === val.label))
  })
  tableRules.value.sort(function (a, b) {
    return a.sort - b.sort
  })
}

</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  b {
    margin-right: 10px;
  }
}

</style>
