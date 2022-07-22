// routes.js

const Agenda = () => import ("./components/pages/Agenda");
const Home = () => import ("./components/pages/Home");
const Games = () => import ("./components/pages/Games");
const DescricaoCampeonato = () => import ("./components/content/DescricaoCampeonato");
const Error404 = () => import ("./components/pages/Error404");

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
