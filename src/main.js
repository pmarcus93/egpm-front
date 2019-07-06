import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);

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
