import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import vuetify from "@/plugins/vuetify";
import "vuetify/dist/vuetify.min.css";

const app = createApp(App, {router});
app.use(router);
app.use(vuetify);
app.mount('#app');

