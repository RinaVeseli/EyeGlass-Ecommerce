import { createRouter, createWebHistory } from 'vue-router';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "Home" */ '../views/pages/HomePage.vue'
      ),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/pages/About.vue'
      ),
  },
  {
    path: '/glasses',
    name: 'glasses',
    component: () =>
      import(
        /* webpackChunkName: "portfolio"  */ '../views/pages/Glasses.vue'
      ),
  },
  {
    path: `/glasses/glasses-details/:_id`,
    name: 'glasses-details',
    component: () =>
      import(
        /* webpackChunkName: "Edit" */ '../views/pages/GlassesDetails.vue'
      ),
    props: true,
  },

  {
    path: '/contact-us',
    name: 'contact-us',
    component: () =>
      import(
        /* webpackChunkName: "portfolio"  */ '../views/pages/Contact-us.vue'
      ),
  },

  {
    path: '/login',
    name: 'login',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/user/Login.vue'
      ),
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/pages/HomePage.vue'
      ),
  },
  {
    path: '/testpage',
    name: 'testpage',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/pages/TestPage.vue'
      ),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/user/Register.vue'
      ),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/pages/Dashboard/Dashboard.vue'
      ),
    children: [
      {
        path: 'about-list',
        name: 'AboutList',
        component: () =>
          import(
            /* webpackChunkName: "AboutList" */ '../components/about/AboutList.vue'
          ),
        props: true,
      },
      {
        path: `EditAbout/:_id`,
        name: 'EditAbout',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../components/about/EditAbout.vue'
          ),
        props: true,
      },
      {
        path: 'brand/brand-list',
        name: 'BrandList',
        component: () =>
          import(
            /* webpackChunkName: "Home" */ '../components/brands/BrandsList.vue'
          ),
      },
      {
        path: 'brand/create',
        name: 'Create',
        component: () =>
          import(
            /* webpackChunkName: "create" */ '../components/brands/AddBrand.vue'
          ),
        meta: { requiresAuth: true },
      },
      {
        path: `brand/edit/:_id`,
        name: 'Edit',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../components/brands/EditBrand.vue'
          ),
      },
      {
        path: 'eyeglasses/eyeglasses-list',
        name: 'EyeGlassesList',
        component: () =>
          import(
            /* webpackChunkName: "Home" */ '../components/eyeglasses/EyeglassesList.vue'
          ),
      },
      {
        path: 'eyeglasses/create',
        name: 'Create',
        component: () =>
          import(
            /* webpackChunkName: "create" */ '../components/eyeglasses/AddEyeglasses.vue'
          ),
        meta: { requiresAuth: true },
      },
      {
        path: `eyeglasses/editEyeglasses/:_id`,
        name: 'Edit',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../components/eyeglasses/EditEyeglasses.vue'
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(
//     (record) => record.meta.requiresAuth
//   );
//   const isAuthenticated = firebase.auth().currentUser;
//   console.log('isauthenticated', isAuthenticated);
//   if (requiresAuth && !isAuthenticated) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
