import { createApp } from "vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function () {
    return {left: 0, top: 0};
  }
})

app.use(router)

app.mount('#app')