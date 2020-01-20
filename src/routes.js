// routes.js

import Agenda from "./components/telas/Agenda";
import Home from "./components/telas/Home";
import Games from "./components/telas/Games";
import DescricaoCampeonato from "./components/content/DescricaoCampeonato";
import Error404 from "./components/telas/Error404";



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
        path: '/games',
        component: Games,
    },
    {
        path: '/games/:jogo',
        component: DescricaoCampeonato
    },
    {
        path: '/agenda',
        component: Agenda
    },

    {
        path: '*',
        component: Error404
    },
];

export default routes;
