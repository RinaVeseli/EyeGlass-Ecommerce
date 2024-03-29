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
    props: true,
  },
  {
    path: '/about',
    name: 'about',

    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/pages/About.vue'
      ),
  },
  {
    path: '/contacts',
    name: 'contacts',

    component: () =>
      import(
        /* webpackChunkName: "contacts" */ '../views/pages/Contacts.vue'
      ),
  },
  {
    path: `/contacts/contacts-details/:_id`,
    name: 'contacts-details',

    component: () =>
      import(
        /* webpackChunkName: "contacts" */ '../views/pages/ContactsDetails.vue'
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
    path: '/header',
    name: 'Header',
    component: () =>
      import(
        /* webpackChunkName: "create" */ '../components/Common/Header.vue'
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
    path: '/shopping-cart',
    name: 'shoppingCart',
    component: () =>
      import(
        /* webpackChunkName: "shoppingCart" */ '../views/pages/ShoppingCart.vue'
      ),
      meta: {isAuthenticated: true},
  },
  {
    path: '/orders',
    name: 'orders',
    component: () =>
      import(
        /* webpackChunkName: "ordersList" */ '../views/user/OrdersList.vue'
      ),
      meta: {isAuthenticated: true},
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () =>
      import(
        /* webpackChunkName: "wishlist" */ '../views/user/Wishlist.vue'
      ),
      meta: {isAuthenticated: true},
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { isAdmin: true },
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
        meta: { isAdmin: true },
      },
      {
        path: `EditAbout/:_id`,
        name: 'EditAbout',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../components/about/EditAbout.vue'
          ),
        props: true,
        meta: { isAdmin: true },
      },
      {
        path: 'brand/brand-list',
        name: 'BrandList',
        component: () =>
          import(
            /* webpackChunkName: "Home" */ '../components/brands/BrandsList.vue'
          ),
        meta: { isAdmin: true },
      },
      {
        path: 'brand/create',
        name: 'Create',
        component: () =>
          import(
            /* webpackChunkName: "create" */ '../components/brands/AddBrand.vue'
          ),
        meta: { isAdmin: true },
      },
      {
        path: `brand/edit/:_id`,
        name: 'Edit',
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ '../components/brands/EditBrand.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'eyeglasses/eyeglasses-list',
        name: 'EyeGlassesList',
        component: () =>
          import(
            /* webpackChunkName: "Home" */ '../components/eyeglasses/EyeglassesList.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'eyeglasses/create',
        name: 'CreateEye',
        component: () =>
          import(
            /* webpackChunkName: "create" */ '../components/eyeglasses/AddEyeglasses.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: `eyeglasses/editEyeglasses/:_id`,
        name: 'EditEye',
        component: () =>
          import(
            /* webpackChunkName: "EditEye" */ '../components/eyeglasses/EditEyeglasses.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'contacts/contacts-list',
        name: 'ContactsList',
        component: () =>
          import(
            /* webpackChunkName: "ContactsList" */ '../components/Dashboard/contacts/ContactsList.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'contacts/create',
        name: 'AddContacts',
        component: () =>
          import(
            /* webpackChunkName: "AddContacts" */ '../components/Dashboard/contacts/AddContacts.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: `contacts/editContacts/:_id`,
        name: 'EditContacts',
        component: () =>
          import(
            /* webpackChunkName: "EditContacts" */ '../components/Dashboard/contacts/EditContacts.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'orderSteps',
        name: 'OrderSteps',
        component: () =>
          import(
            /* webpackChunkName: "OrderSteps" */ '../components/Dashboard/orderSteps/OrderSteps.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'orderSteps/create',
        name: 'CreateOrderStep',
        component: () =>
          import(
            /* webpackChunkName: "CreateOrderStep" */ '../components/Dashboard/orderSteps/AddOrderSteps.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: `orderSteps/editOrderStep/:_id`,
        name: 'EditOrderStep',
        component: () =>
          import(
            /* webpackChunkName: "EditOrderStep" */ '../components/Dashboard/orderSteps/EditOrderStep.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'faqs',
        name: 'Faqs',
        component: () =>
          import(
            /* webpackChunkName: "Faqs" */ '../components/Dashboard/Faqs/FaqList.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'faqs/create',
        name: 'CreateFaq',
        component: () =>
          import(
            /* webpackChunkName: "CreateFaq" */ '../components/Dashboard/Faqs/AddFaq.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: `faqs/editFaqs/:_id`,
        name: 'EditFaq',
        component: () =>
          import(
            /* webpackChunkName: "EditFaq" */ '../components/Dashboard/Faqs/EditFaq.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'shapes',
        name: 'Shapes',
        component: () =>
          import(
            /* webpackChunkName: "Faqs" */ '../components/Dashboard/shape/ShapeList.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'shapes/create',
        name: 'CreateShape',
        component: () =>
          import(
            /* webpackChunkName: "CreateFaq" */ '../components/Dashboard/shape/AddShape.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: `shapes/editShapes/:_id`,
        name: 'EditShape',
        component: () =>
          import(
            /* webpackChunkName: "EditFaq" */ '../components/Dashboard/shape/EditShape.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'contacts',
        name: 'Contact',
        component: () =>
          import(
            /* webpackChunkName: "Faqs" */ '../components/Dashboard/contactus/ContactList.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: `users`,
        name: 'UsersList',
        component: () =>
          import(
            /* webpackChunkName: "Users" */ '../components/users/UsersList.vue'
          ),
          meta: { isAdmin: true },
      },
      {
        path: 'reviews',
        name: 'reviews',
        component: () =>
          import(
            /* webpackChunkName: "reviews" */ '../views/user/Reviews.vue'
          ),
          meta: { isAdmin: true },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErroPage',
    component: () =>
      import(
        /* webpackChunkName: "Edit" */ '../views/pages/ErrorPage.vue'
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
      window.scrollTo(0, 0);
      next();
    }
  });
});
export default router;
