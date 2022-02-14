import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import VueLazyload from 'vue-lazyload'
const App = () => import('./App.vue');

Vue.use(VueLazyload);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.min.css';

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return {x: 0, y: 0};
    }
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
