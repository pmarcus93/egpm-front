// routes.js

import App from './App.vue';
import Duvidas from "./components/Duvidas.vue";
import Home from "./components/Home";
import DuvidaBox from "./components/DuvidaBox";


const routes = [
    {
        path: '/duvidas',
        component: Duvidas,
        children : [{path: '/duvidas/:nome/:id', component: DuvidaBox}],
    },
    {path: '/inicio', component: Home},
    {path: '/', component: Home},
];

export default routes;