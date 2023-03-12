<template>
  <Sidebar />
  <router-view></router-view>
  <!-- <DashboardHome/> -->
</template>
<script>
import Sidebar from './Sidebar.vue';
// import DashboardHome from './DashboardHome.vue';
export default {
  name: 'recursive-menu',
  components: {
    Sidebar,
    // DashboardHome,
  },
};
</script>
