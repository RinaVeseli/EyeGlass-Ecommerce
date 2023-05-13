<template>
  <Sidebar />
  <router-view></router-view>
</template>
<script>
import Sidebar from './Sidebar.vue';
export default {
  name: 'recursive-menu',
  components: {
    Sidebar,
  },
};
</script>
