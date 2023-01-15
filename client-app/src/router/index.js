import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "Home" */ '../components/brands/BrandsList.vue'
      ),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ '../views/AboutView.vue'
  //     ),
  // },
  // {
  //   path: '/portfolio',
  //   name: 'portfolio',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "portfolio"  */ '../views/PortfolioView.vue'
  //     ),
  // },
  {
    path: '/create',
    name: 'Create',
    component: () =>
      import(
        /* webpackChunkName: "create" */ '../components/brands/AddBrand.vue'
      ),
  },
  {
    path: `/edit/:_id`,
    name: 'Edit',
    component: () =>
      import(
        /* webpackChunkName: "Edit" */ '../components/brands/EditBrand.vue'
      ),
  },

  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "register" */ '../views/RegisterView'
  //     ),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
