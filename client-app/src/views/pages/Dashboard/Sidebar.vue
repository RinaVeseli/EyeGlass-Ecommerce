<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <div class="text-center mt-3">
      <v-divider color="white" class="mt-3"></v-divider>
      <v-avatar class="my-4 m-3" size="40">
        <v-img
          src="http://cdn.onlinewebfonts.com/svg/img_569204.png"
          class="image"
        ></v-img>
      </v-avatar>
      <h3 class="my-4 m-3 black--text" size="40">
        Hello {{ currentUser.email }}
      </h3>
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
  faUser,
  faComputerMouse,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: 'recursive-menu',
  computed: {
    currentUser() {
      return firebase.auth().currentUser;
    },
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
            path: '/admin/dashboard/about-list',
          },
          {
            label: 'Faqs',
            path: '/admin/dashboard/faqs',
          },
          {
            label: 'contact',
            path: '/admin/dashboard/contact',
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
                path: '/admin/products/shapes/details',
              },
              {
                label: 'Create',
                path: '/admin/products/shapes/create',
              },
            ],
          },
          {
            label: 'Eyeglasses',
            children: [
              {
                label: 'Details',
                path: '/admin/dashboard/eyeglasses/eyeglasses-list',
              },
              {
                label: 'Create',
                path: '/admin/dashboard/eyeglasses/create',
              },
            ],
          },

          {
            label: 'Sunglasses',
            children: [
              {
                label: 'Details',
                path: '/admin/products/shapes/details',
              },
              {
                label: 'Create',
                path: '/admin/products/shapes/create',
              },
            ],
          },
        ],
      },
      {
        label: 'Common',
        icon: faComputerMouse,
        children: [
          {
            label: 'Brand',

            children: [
              {
                label: 'Details',
                path: '/admin/dashboard/brand/brand-list',
              },
              {
                label: 'Create',
                path: '/admin/dashboard/brand/create',
              },
            ],
          },
          {
            label: 'Category',
            children: [
              {
                label: 'Details',
                path: '/admin/dashboard/brand/brand-list',
              },
              {
                label: 'Create',
                path: '/admin/dashboard/brand/create',
              },
            ],
          },
        ],
      },
      {
        label: 'Users',
        icon: faUser,
        path: '/admin/dashboard/users',
      },

      {
        label: 'Settings',
        icon: faGear,
      },
      {
        label: 'Logout',
        icon: faArrowAltCircleRight,
        path: '/',
      },
    ],
  }),
  components: {
    MenuItem,
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 1468) {
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
