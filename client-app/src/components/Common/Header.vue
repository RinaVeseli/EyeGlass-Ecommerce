<template>
  <v-app-bar
    app
    color="white"
    dark
    class="navbar"
    style="height: 86px"
  >
    <div class="navbar__logo">
      <img :src="logo" />
    </div>
    <v-btn
      icon
      class="navbar__menu-btn"
      @click="isMenuOpen = !isMenuOpen"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <nav :class="{ 'navbar__menu-open': isMenuOpen }">
      <ul>
        <li
          v-for="item in navigationItems"
          v-bind:key="item.name"
          style="margin-top: 25px; margin-right: 10px"
        >
          <router-link v-bind:to="item.path">
            {{ item.name }}
          </router-link>
        </li>
        <li
          style="margin-top: 25px; margin-right: 10px"
          class="controls"
        >
          <div v-if="signIn">
            <button @click="signOut">LOG OUT</button>
          </div>
          <div v-else>
            <router-link
              to="/register"
              style="margin-top: 25px; margin-right: 25px"
              >REGISTER</router-link
            >
            <router-link :to="{ name: 'login' }">LOGIN</router-link>
          </div>
        </li>
      </ul>
    </nav>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-account-outline</v-icon>
      <v-menu activator="parent" location="bottom right">
        <v-list>
          <router-link to="/admin/dashboard">
            <v-list-item>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/orders">
            <v-list-item>
              <v-list-item-title> Orders </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
    </v-btn>

    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <router-link to="/shopping-cart">
      <v-btn icon class="mx-1">
        <v-badge color="#94D0EF" :content="cartLength">
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../../assets/303-3037502_2017-atlantic-eye-center-eye-optical-logo-removebg-preview.png';
import axios from 'axios';
export default {
  mounted() {
    this.setupFirebase();
  },
  created() {
    axios
      .get('http://localhost:3000/api/v1/cart')
      .then((response) => {
        this.cartLength = response.data.result;
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          // User is signed in.
          console.log('signed in');
          console.log(user.email);
          this.signIn = true;
        } else {
          // No user is signed in.
          this.signIn = false;
          console.log('signed out', this.signIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ path: 'login' });
        });
    },
  },
  data: function () {
    return {
      signIn: false,
      logo: logo,
      cartLength: 0,

      navigationItems: [
        { path: '/', name: 'HOME' },
        { path: '/autoship', name: 'AUTOSHIP' },
        { path: '/contacts', name: 'CONTACTS' },
        { path: '/glasses', name: 'GLASSES' },
        { path: '/sunglasses', name: 'SUNGLASSES' },
        { path: '/about', name: 'ABOUT' },
        { path: '/contact-us', name: 'CONTACT-US' },
        // { path: '/edit', name: 'Edit' },
        // { path: '/create', name: 'CREATE' },
      ],
    };
  },
};
</script>

<style>
.v-toolbar__title {
  font-size: 2rem !important;
}

.v-btn {
  margin-top: 30px;
}

img {
  margin-top: 25px;
  margin-left: 5px;
}

.v-badge__badge {
  font-size: 10px !important;
  height: 18px !important;
  min-width: 18px !important;
}

nav {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

ul {
  margin-right: 10px;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

a:link,
a:visited {
  text-decoration: none;
  color: rgb(57, 57, 57);
  color: #464b7b;
}

li {
  transition: all 0.1s ease-in-out;
  font-size: 19px;
  color: #464b7b;
}

li:hover {
  transform: scale(1.02);
}

.controls:hover {
  transform: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.navbar__logo {
  flex: 1;
}
.navbar__menu-btn {
  display: none;
}
.navbar__menu-open {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 86px;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: white;
}
.navbar__icons {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .navbar__menu-btn {
    display: block;
  }
  nav {
    display: none;
  }
  .navbar__menu-open {
    display: flex;
  }
}
</style>
