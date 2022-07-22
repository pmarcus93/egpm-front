// routes.js

const Agenda = () => import ("./sfc/pages/Agenda");
const Home = () => import ("./sfc/pages/Home");
const Games = () => import ("./sfc/pages/Games");
const DescricaoCampeonato = () => import ("./sfc/component/DescricaoCampeonato");
const Error404 = () => import ("./sfc/pages/Error404");

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
