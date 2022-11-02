import { createApp } from "vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const App = () => import('./App.vue');

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function () {
    return {x: 0, y: 0};
  }
})

app.use(router)

app.mount('#app')