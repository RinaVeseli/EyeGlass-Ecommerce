import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';
import 'vuetify/styles';
import vuetify from './plugins/vuetify';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
