// routes.js

import Home from "./components/telas/Home";
import CampeonatoTela from "./components/telas/Games";
import DescricaoCampeonato from "./components/content/DescricaoCampeonato";
import Erro404 from "./components/telas/Error404";
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