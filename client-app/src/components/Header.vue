<template>
  <header class="head">
    <div class="site-info">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ title }}</h1>
    </div>
    <nav>
      <ul>
        <li v-for="item in navigationItems" v-bind:key="item.name">
          <router-link v-bind:to="item.path">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'New UBT Design',
      navigationItems: [
        { path: '/', name: 'Home' },
        // { path: '/edit', name: 'Edit' },
        { path: '/create', name: 'Create' },
      ],
    };
  },
};
</script>

<style scoped>
.head {
  background-color: aliceblue;
  padding: 2rem;
  display: flex;
  align-items: flex-end;
  gap: 3rem;
}

h1 {
  font-size: 2rem;
}

img {
  max-width: 100px;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

a:link,
a:visited {
  text-decoration: none;
  color: rgb(57, 57, 57);
}

li {
  transition: all 0.1s ease-in-out;
}
li:hover {
  transform: scale(1.02);
}
</style>
