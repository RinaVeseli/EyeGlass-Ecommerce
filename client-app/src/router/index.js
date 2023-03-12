import { createRouter, createWebHistory } from 'vue-router';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
    meta: { isAuthenticated: true },
    component: () =>
      import(
        /* webpackChunkName: "portfolio"  */ '../views/pages/Contact-us.vue'
      ),
  },
  // {
  //   path: '/create',
  //   name: 'Create',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "create" */ '../components/brands/AddBrand.vue'
  //     ),
  //   meta: { isAdmin: true },
  // },
  {
    path: '/header',
    name: 'Header',
    component: () =>
      import(
        /* webpackChunkName: "create" */ '../components/Common/Header.vue'
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
    name: 'dashboard',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/pages/Dashboard/DashboardHome.vue'
      ),
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    meta: { isAdmin: true },
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
        name: 'CreateEye',
        component: () =>
          import(
            /* webpackChunkName: "create" */ '../components/eyeglasses/AddEyeglasses.vue'
          ),
      },
      {
        path: `eyeglasses/editEyeglasses/:_id`,
        name: 'EditEye',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../components/eyeglasses/EditEyeglasses.vue'
          ),
      },
      {
        path: `users`,
        name: 'UsersList',
        component: () =>
          import(
            /* webpackChunkName: "Users" */ '../components/users/UsersList.vue'
          ),
      },
      {
        path: '/:catchAll(.*)',
        name: 'ErroPage',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../views/pages/ErrorPage.vue'
          ),
      },
    ],
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
        next('/login');
      } else {
        const tokenResult =
          await getAuth().currentUser.getIdTokenResult();
        const isAdmin = tokenResult.claims.admin;
        if (
          isAdmin &&
          to.matched.some((record) => !record.meta.isAdmin)
        ) {
          next();
        } else if (to.matched.some((record) => record.meta.isAdmin)) {
          if (!tokenResult.claims.admin) {
            next('/');
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
