import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import '@fortawesome/fontawesome-free/css/all.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAuth, connectAuthEmulator } from 'firebase/auth';
// import {
//   getFunctions,
//   connectFunctionsEmulator,
// } from 'firebase/functions';

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
// connectAuthEmulator(getAuth(), 'http://127.0.0.1:9099');

// connectFunctionsEmulator(getFunctions(), 'http://127.0.0.1:5001');

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    createApp(App)
      .use(router)
      .use(vuetify)
      .use(firebase)

      .mount('#app');
  }
});
