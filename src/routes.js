// routes.js

import Home from "./components/Home";
import CampeonatoTela from "./components/telas/Games";
import DescricaoCampeonato from "./components/DescricaoCampeonato";
import Erro404 from "./components/Error404";
import SejaApoiador from "./components/telas/SponsorUs";

const routes = [
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
        path: '*',
        component: Erro404
    },
];

export default routes;