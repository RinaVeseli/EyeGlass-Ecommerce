<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <div class="text-center mt-5">
      <h3 class="teal--text font-weight-bold">Optical</h3>
      <v-divider color="white" class="mt-4"></v-divider>
      <v-avatar class="my-5" size="60">
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          class="image"
        ></v-img>
      </v-avatar>
      <h1 class="black--text">Hello {{ currentUser.email }}</h1>
    </div>
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
      :to="item.path"
    />
    <i
      @click="smallMenu = !smallMenu"
      class="fa-sharp fa-solid fa-bars"
    ></i>
  </div>
</template>

<script>
import MenuItem from '../../../components/MenuItem.vue';
// import HomePage from '../HomePage.vue';
import {
  faGear,
  faShapes,
  faPager,
  faUserShield,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: 'recursive-menu',
  computed: {
    currentUser() {
      return firebase.auth().currentUser;
    }
  },
  data: () => ({
    smallMenu: false,
    menuTree: [
      {
        label: 'Dashboard',
        icon: faShapes,
        path: '/dashboard',
      },

      {
        label: 'Pages',
        icon: faPager,
        children: [
          // {
          //   label: 'HomePage',
          //   path: '/homepage',
          //   component: HomePage,
          // },
          {
            label: 'About',
            path: '/dashboard/about-list',
          },
          {
            label: 'Faqs',
            path: '/dashboard/faqs',
          },
          {
            label: 'contact',
            path: '/dashboard/contact',
          },
        ],
      },
      {
        label: 'Products',
        icon: faUserShield,
        children: [
          {
            label: 'Contact',
            children: [
              {
                label: 'Details',
                path: '/products/shapes/details',
              },
              {
                label: 'Create',
                path: '/products/shapes/create',
              },
            ],
          },
          {
            label: 'Eyeglasses',
            children: [
              {
                label: 'Details',
                path: '/dashboard/eyeglasses/eyeglasses-list',
              },
              {
                label: 'Create',
                path: '/dashboard/eyeglasses/create',
              },
            ],
          },

          {
            label: 'Sunglasses',
            children: [
              {
                label: 'Details',
                path: '/products/shapes/details',
              },
              {
                label: 'Create',
                path: '/products/shapes/create',
              },
            ],
          },
          {
            label: 'Common',
            children: [
              {
                label: 'Brand',

                children: [
                  {
                    label: 'Details',
                    path: '/dashboard/brand/brand-list',
                  },
                  {
                    label: 'Create',
                    path: '/dashboard/brand/create',
                  },
                ],
              },
              {
                label: 'Category',
                children: [
                  {
                    label: 'Details',
                    path: '/dashboard/brand/brand-list',
                  },
                  {
                    label: 'Create',
                    path: '/dashboard/brand/create',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Users',
        icon: faUser,
        path: '/dashboard/users'
      },
      {
        label: 'Settings',
        icon: faGear,
      },
    ],
  }),
  components: {
    MenuItem,
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 600) {
        this.smallMenu = true;
      } else {
        this.smallMenu = false;
      }
    },
  },
  mounted() {
    this.checkScreenSize();

    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 240px;
  left: 0;
  top: 0;
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  i {
    position: fixed;
    left: 250px;
    font-size: 20px;
    top: 15px;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 50px;
    i {
      left: 20px;
    }
  }
}
</style>
