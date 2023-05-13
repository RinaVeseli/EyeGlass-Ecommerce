import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import '@fortawesome/fontawesome-free/css/all.min.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import axios from 'axios';
import store from './store';
import Vuex from 'vuex';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
loadFonts();
const firebaseConfig = {
  apiKey: 'AIzaSyAcR6-Zm_oj-3mOXKxEbsJnaCIVndVNIkk',
  authDomain: 'eyeglasses-e-commerce.firebaseapp.com',
  projectId: 'eyeglasses-e-commerce',
  storageBucket: 'eyeglasses-e-commerce.appspot.com',
  messagingSenderId: '253703255522',
  appId: '1:253703255522:web:64ceb417a7fbfcac5a35bb',
  measurementId: 'G-ER84QTE2K2',
};
firebase.initializeApp(firebaseConfig);
let app;

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // Show error message
//       createToast('Please Login', {
//         position: 'bottom-right',
//         type: 'info',
//         toastBackgroundColor: '#0071BC',
//         transition: 'slide',
//       });
//       console.error('Unauthorized access');
//     }
//     return Promise.reject(error);
//   }
// );

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    user.getIdToken().then((idToken) => {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + idToken;
    });
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
  if (!app) {
    createApp(App)
      .use(router)
      .use(vuetify)
      .use(firebase)
      .use(Vuex)
      .use(store)
      .mount('#app');
    app.component('EasyDataTable', Vue3EasyDataTable);
  }
});
