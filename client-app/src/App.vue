<template>
  <v-app>
    <v-main>
      <Header />

      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Common/Header.vue';
import Footer from './components/Common/Footer';
// import topHeader from './components/Top-Header.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<!-- <style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  box-sizing: border-box;
  font-size: 1.6rem;
}
</style> -->
