// routes.js

import Duvidas from "./components/Duvidas.vue";
import Home from "./components/Home";
import CampeonatoTela from "./components/CampeonatoTela";
import DescricaoCampeonato from "./components/DescricaoCampeonato";
import Erro404 from "./components/Erro404";
import SejaApoiador from "./components/SejaApoiador";
import Login from "./components/Login";


const routes = [
    {
        path: '/duvidas',
        component: Duvidas,
    },
    {
        path: '/inicio',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/campeonatos',
        component: CampeonatoTela,
    },
    {
        path: '/campeonatos/:jogo',
        component: DescricaoCampeonato
    },
    {
        path: '/apoie',
        component: SejaApoiador
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: Erro404
    },
];

export default routes;