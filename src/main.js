import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyButtons';
import CKEditor from '@ckeditor/ckeditor5-vue';

global.PNotify = require('pnotify/dist/umd/PNotify');
global.PNotify.defaults.delay = 3000;
global.PNotify.defaults.styling = 'bootstrap4';
global.jQuery = jQuery;
global.$ = jQuery;

Vue.use(VueRouter);
Vue.use(CKEditor);

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

