<template>
  <h2 style="text-align: center">员工信息</h2>
  <div class="info_top">
    <div class="left">
      <el-descriptions
        :column="2"

        border
        class="margin-top"
      >
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">

              姓名
            </div>
          </template>
          {{ userData.username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">

              性别
            </div>
          </template>
          {{ userData.gender }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">

              民族
            </div>
          </template>
          {{ userData.nationality }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">

              手机号
            </div>
          </template>
          {{ userData.mobile }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">

              居住地
            </div>
          </template>
          {{ userData.address }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">

              入职时间
            </div>
          </template>
          {{ userData.openTime }}
        </el-descriptions-item>
        <el-descriptions-item align="left" label="备注" label-align="right">
          <el-tag v-for="item in userData.remark" :key="item" size="small">{{ item }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions
        :column="2"

        border
      >
        <el-descriptions-item align="left" label="联系地址" label-align="right" width="126.38px">
          {{ userData.address }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="right">
      <el-avatar :size="100" :src="userData.avatar" shape="square"/>

    </div>
  </div>
  <div class="info_btm">
    <el-descriptions
      :column="2"

      border
      direction="vertical"
    >
      <el-descriptions-item>
        <template #label>经历</template>
        <template #default>
          <ul>
            <li v-for="item in userData.experience" :key="item.endTime">
              {{ item.startTime }} -- {{ item.endTime }} <span>{{ item.title }}</span> <span>{{ item.desc }}</span>
            </li>
          </ul>
        </template>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions
      :column="2"
      border
      direction="vertical"
    >
      <el-descriptions-item>
        <template #label>专业</template>
        <template #default>
          {{ userData.major }}
        </template>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions
      :column="2"

      border
      direction="vertical"
    >
      <el-descriptions-item>
        <template #label>荣耀</template>
        <template #default>
          {{ userData.glory }}
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import userApi from '@/api/user'
import { ref } from 'vue';

const route = useRoute()
const userData = ref({})
const viewUserINfo = async () => {
  userData.value = await userApi.getUserDetail(route.params.id)
  console.log(userData.value)
}

viewUserINfo()
</script>
<style lang="scss" scoped>
.info_top {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  .left {
    flex: 1;

  }

  .right {
    padding: 0px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
  }
}

.info_btm {
  margin: 0 auto;
  width: 1000px;

  .el-descriptions {
    margin-top: 20px;
  }
}
</style>
