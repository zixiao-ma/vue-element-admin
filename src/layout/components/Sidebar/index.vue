<template>
  <div>
    <div class="navHeader">
      <logo-image></logo-image>
      <span>{{ username }}</span>
    </div>
    <deep-menu :collapse="props.collapse" :data="menus"></deep-menu>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import DeepMenu from '@/layout/components/Sidebar/deepMenu';
import LogoImage from '@/components/logoImage';
import { useStore } from 'vuex';
import { filterMenus, getMenus } from '@/utils/router'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const { username } = store.getters.userInfo
const props = defineProps({
  collapse: {
    type: Boolean,
    defaults: () => false
  }
})

const menus = getMenus(filterMenus(router.getRoutes()));
</script>
<style lang="scss">
.navHeader {
  display: flex;
  align-items: center;
  padding: 12px;

  span {
    color: #fff;
    margin-left: 13px;
  }
}
</style>
