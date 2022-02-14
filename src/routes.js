// routes.js

const Agenda = () => import ("./components/telas/Agenda");
const Home = () => import ("./components/telas/Home");
const Games = () => import ("./components/telas/Games");
const DescricaoCampeonato = () => import ("./components/content/DescricaoCampeonato");
const Error404 = () => import ("./components/telas/Error404");

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
