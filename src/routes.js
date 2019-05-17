// routes.js

import Duvidas from "./components/Duvidas.vue";
import Home from "./components/Home";
import CampeonatoTela from "./components/CampeonatoTela";
import DescricaoCampeonato from "./components/DescricaoCampeonato";


const routes = [
    {
        path: '/duvidas',
        component: Duvidas,
    },
    {path: '/inicio', component: Home},
    {path: '/', component: Home},
    {
        path: '/campeonatos',
        component: CampeonatoTela
    },
    {
        path: '/campeonatos/:jogo',
        component: DescricaoCampeonato
    },
];

export default routes;