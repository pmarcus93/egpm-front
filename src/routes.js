// routes.js

import App from './App.vue';
import Duvidas from "./components/Duvidas.vue";
import Home from "./components/Home";


const routes = [
    { path: '/duvidas', component: Duvidas },
    { path: '/inicio', component: Home },
    { path: '/', component: Home },
];

export default routes;