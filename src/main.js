import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap'
import VueRouter from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return {x: 0, y: 0};
    }
});

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

Vue.use(Bootstrap);
