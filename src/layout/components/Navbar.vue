<template>
  <header>
    <div class="navBar-top">
      <div class="left">
        <svg-icon :icon="iscollapse?'hamburger-opened':'hamburger-closed'" @click="collapse"></svg-icon>
        <span>个人中心</span>
      </div>
      <div class="right">
        <div class="avatar">
          <el-dropdown>
    <span class="el-dropdown-link">
      <img alt="" src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png">
    </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </div>
      </div>
    </div>
    <div class="tags">

    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const emit = defineEmits(['collapse'])
const iscollapse = ref(false)

const collapse = () => {
  iscollapse.value = !iscollapse.value
  emit('collapse', iscollapse.value)
}
const loginOut = () => {
  ElMessageBox.confirm(
    '你确定要退出登录吗?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '退出成功！'
      })
      store.commit('loginOut')
      router.push({ name: 'login' })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出'
      })
    })
}
</script>
<style lang="scss" scoped>
header {

  .navBar-top {
    padding: 5px 10px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      .avatar {
        img {
          width: 40px;
        }
      }
    }

    span {
      margin-left: 10px;
      transition: all .2s;
    }
  }

  .tags {
    height: 32px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
}
</style>
