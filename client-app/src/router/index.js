import { createRouter, createWebHistory } from 'vue-router';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Home" */ '../components/brands/BrandsList.vue'
  //     ),
  // },
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
    path: '/contact-us',
    name: 'contact-us',
    meta: {isAuthenticated: true},
    component: () =>
      import(
        /* webpackChunkName: "portfolio"  */ '../views/pages/Contact-us.vue'
      ),
  },
  {
    path: '/create',
    name: 'Create',
    component: () =>
      import(
        /* webpackChunkName: "create" */ '../components/brands/AddBrand.vue'
      ),
    meta: { isAdmin: true },
  },
  {
    path: `/edit/:_id`,
    name: 'Edit',
    component: () =>
      import(
        /* webpackChunkName: "Edit" */ '../components/brands/EditBrand.vue'
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
    path: '/register',
    name: 'register',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/user/Register.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), async (user) => {
    const shouldBeLoggedIn = (record) =>
      record.meta.isAuthenticated || record.meta.isAdmin;

    if (to.matched.some((record) => shouldBeLoggedIn(record))) {
      if (!user) {
        next("/login");
      } else {
        const tokenResult = await getAuth().currentUser.getIdTokenResult();
        const isAdmin = tokenResult.claims.admin;
        if (isAdmin && to.matched.some((record) => !record.meta.isAdmin)) {
          next();
        } else if (to.matched.some((record) => record.meta.isAdmin)) {
          if (!tokenResult.claims.admin) {
            next("/");
          } else {
            next();
          }
        } else {
          next();
        }
      }
    } else {
      next();
    }
  });
});




export default router;
