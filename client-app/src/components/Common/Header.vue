<template>
  <v-app-bar app color="white" dark style="height: 86px">
    <v-divider vertical class="ml-1 mr-3"></v-divider>
    <img class="text-lg-center" :src="logo" />
    <v-spacer></v-spacer>
    <nav>
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
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-badge color="#94D0EF" content="2">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../../assets/303-3037502_2017-atlantic-eye-center-eye-optical-logo-removebg-preview.png';
export default {
  mounted() {
    this.setupFirebase();
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
</style>
