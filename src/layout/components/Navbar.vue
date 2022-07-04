<template>
  <header>
    <div class="navBar-top">
      <div class="left">
        <svg-icon :icon="iscollapse?'hamburger-opened':'hamburger-closed'" @click="collapse"></svg-icon>
        <span>个人中心</span>
      </div>
      <div class="right">
        <div class="search">
          <el-select
            v-model="keyword"
            :loading="loading"
            :prefix-icon="Search"
            :remote-method="remoteMethod"
            filterable
            multiple
            placeholder="Please enter a keyword"
            remote
            reserve-keyword
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="fullScreen" @click="screenfull.toggle();isFull=!isFull">
          <svg-icon :icon="isFull?'fullscreen':'exit-fullscreen'"></svg-icon>
        </div>
        <div class="avatar">
          <el-dropdown>
    <span class="el-dropdown-link">
     <logo-image></logo-image>
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
      <tags-view></tags-view>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import LogoImage from '@/components/logoImage';
import { useStore } from 'vuex';
import TagsView from '@/layout/components/tagsView';
import screenfull from 'screenfull';
import { Search } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon';

const keyword = ref('')
const isFull = ref(true)
const store = useStore()

const router = useRouter()
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
      rest()
      store.commit('tagView/removeTag')
      store.commit('user/loginOut')
      router.push('/login')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出'
      })
    })
}

function rest () {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.permission &&
    store.getters.userInfo.permission.menus
  ) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
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
      display: flex;
      align-items: center;

      .fullScreen {
        font-size: 25px;
        color: rgb(191, 203, 217);
        margin-left: 10px;
      }

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
    padding: 0px 10px;
    line-height: 32px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
}
</style>
