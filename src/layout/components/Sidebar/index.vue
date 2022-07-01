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
import { defineProps, reactive } from 'vue'
import DeepMenu from '@/layout/components/Sidebar/deepMenu';
import LogoImage from '@/components/logoImage';
import { useStore } from 'vuex';
import { filterRouter } from '@/utils/FilterRouter';

const store = useStore()
const { username } = store.getters.userInfo
const props = defineProps({
  collapse: {
    type: Boolean,
    defaults: () => false
  }
})
const menus = reactive(filterRouter());
</script>
<style lang="scss">
.navHeader {
  display: flex;
  align-items: center;
  padding: 10px;

  span {
    color: #fff;
    margin-left: 10px;
  }
}
</style>
