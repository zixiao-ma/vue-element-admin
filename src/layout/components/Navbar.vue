<template>
  <header>
    <div class="navBar-top">
      <div class="left">
        <svg-icon :icon="iscollapse?'hamburger-opened':'hamburger-closed'" @click="collapse"></svg-icon>
        <bread-crumb></bread-crumb>
      </div>
      <div class="right">
        <div class="subject" data-intro="这里可以设置主题"
             @click="dialogVisible=true">
          <svg-icon icon="change-theme"></svg-icon>
        </div>
        <div class="search">
          <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearch"
            :prefix-icon="Search"
            :trigger-on-focus="false"
            class="inline-input w-50"
            placeholder="快速跳转"
            @select="handleSelect"
          />
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
  <el-dialog
    v-model="dialogVisible"
    title="选择主题"
    width="30%"
  >
    <span>
      选择主题色： <el-color-picker v-model="color"/>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetSubject">恢复默认</el-button>
        <el-button type="primary" @click="changeSubject"
        >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import LogoImage from '@/components/logoImage';
import { useStore } from 'vuex';
import TagsView from '@/layout/components/tagsView';
import screenfull from 'screenfull';
import SvgIcon from '@/components/SvgIcon';
import BreadCrumb from '@/components/breadCrumb';
import { filterMenus, getAutocomplete, getMenus } from '@/utils/Autocomplete';
import { Search } from '@element-plus/icons-vue'

const color = ref()
const dialogVisible = ref(false)
const router = useRouter()
const restaurants = ref([])
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const state1 = ref('')
const querySearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const loadAll = () => {
  return getMenus(filterMenus(getAutocomplete(router.getRoutes())))
}
const resetSubject = () => {
  store.commit('subject/setColor', '#304156')
}
const handleSelect = (item) => {
  router.push(item.link)
}
const changeSubject = () => {
  store.commit('subject/setColor', color.value)
  dialogVisible.value = false
  ElMessage.success('设置成功')
}
onMounted(() => {
  restaurants.value = loadAll()
})
const isFull = ref(true)
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
  background-color: #fff;
  width: 100%;
  padding-right: 20px;

  .navBar-top {
    padding: 5px 50px 5px 10px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 99%;

    .right {
      display: flex;
      align-items: center;

      .fullScreen {
        font-size: 25px;
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

.subject {
  margin-right: 10px;
  font-size: 25px;
}
</style>
