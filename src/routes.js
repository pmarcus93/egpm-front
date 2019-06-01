// routes.js

import Duvidas from "./components/Duvidas.vue";
import Home from "./components/Home";
import CampeonatoTela from "./components/CampeonatoTela";
import DescricaoCampeonato from "./components/DescricaoCampeonato";
import Erro404 from "./components/Erro404";
import SejaApoiador from "./components/SejaApoiador";
import Login from "./components/Login";
import Painel from "./components/Painel";
import ViewCampeonato from "./components/Painel/ViewCampeonato";
import Dashboard from "./components/Painel/Dashboard";
import FormCampeonatos from "./components/Painel/FormCampeonatos";
import ViewPatrocinador from "./components/Painel/ViewPatrocinador";
import FormPatrocinadores from "./components/Painel/FormPatrocinadores";
import ViewDuvida from "./components/Painel/ViewDuvida";
import FormDuvidas from "./components/Painel/FormDuvidas";
import FormUsuarios from "./components/Painel/FormUsuarios";


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
                name: 'viewcampeonato',
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
                name: 'viewpatrocinador',
                path: 'patrocinadores',
                component: ViewPatrocinador,
            },
            {
                path: 'patrocinadores/adicionar',
                component: FormPatrocinadores
            },
            {
                path: 'patrocinadores/editar/:id_patrocinador',
                component: FormPatrocinadores
            },
            {
                name: 'viewduvidas',
                path: 'duvidas',
                component: ViewDuvida,
            },
            {
                path: 'duvidas/adicionar',
                component: FormDuvidas
            },
            {
                path: 'duvidas/editar/:id_duvida',
                component: FormDuvidas
            },
            {
                path: 'usuario/editar/:id_usuario',
                component: FormUsuarios
            },
            {
                name: 'dashboard',
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