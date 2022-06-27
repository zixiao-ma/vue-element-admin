<template>
  <div>
    <sidebar-menu :collapse="props.collapse"></sidebar-menu>
  </div>
</template>

<script setup>
import SidebarMenu from '@/layout/components/Sidebar/SidebarMenu';
import { defineProps } from 'vue'

const props = defineProps({
  collapse: {
    type: Boolean,
    defaults: () => false
  }
})

</script>
<style lang="scss">

</style>
