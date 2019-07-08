// routes.js

const Home = () => import('./components/telas/Home');
const CampeonatoTela = () => import('./components/telas/Games');
const DescricaoCampeonato = () => import('./components/content/DescricaoCampeonato');
const Erro404 = () => import('./components/telas/Error404');
const SejaApoiador = () => import('./components/telas/SponsorUs');

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
