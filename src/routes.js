// routes.js

const Schedule = () => import ("./sfc/pages/Schedule");
const Home = () => import ("./sfc/pages/Home");
const Games = () => import ("./sfc/pages/Games");
const TournamentDescription = () => import ("./sfc/component/TournamentDescription");
const Error404 = () => import ("./sfc/pages/404");

const routes = [
  {
    path: '/#',
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
    component: TournamentDescription
  },
  {
    path: '/schedule',
    component: Schedule
  },
  {
    path: '/:pathMatch(.*)',
    component: Error404
  },
];

export default routes;
