import Vue from "@vue/compat";
import VueRouter from 'vue-router';
import routes from './routes';
const App = () => import('./App.vue');

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
