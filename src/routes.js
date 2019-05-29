// routes.js

import Duvidas from "./components/Duvidas.vue";
import Home from "./components/Home";
import CampeonatoTela from "./components/CampeonatoTela";
import DescricaoCampeonato from "./components/DescricaoCampeonato";
import Erro404 from "./components/Erro404";
import SejaApoiador from "./components/SejaApoiador";
import Login from "./components/Login";
import Painel from "./components/Painel";
import Duvida from "./components/telas/Duvida";
import ViewCampeonato from "./components/Painel/ViewCampeonato";
import ItemErro from "./components/itens/ItemErro";
import Dashboard from "./components/Painel/Dashboard";
import FormCampeonatos from "./components/Painel/FormCampeonatos";


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
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        path: '/painel',
        name: 'painel',
        component: Painel,
        children: [
            {
                path: 'campeonatos',
                component: ViewCampeonato,
            },
            {
                path: 'campeonatos/adicionar',
                component: FormCampeonatos
            },
            {
                path: 'campeonatos/editar/:id_jogo',
                component: FormCampeonatos
            },
            {
                path: '*',
                component: Dashboard
            }
        ]
    },
    {
        path: '*',
        component: Erro404
    },
];

export default routes;