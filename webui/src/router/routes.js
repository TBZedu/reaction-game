import AuthView from '../views/AuthView';
import LeaderboardView from '../views/LeaderboardView.vue';
import UserView from '../views/UserView.vue';
import { requireAuth } from './auth';

const routes = [
  {
    component: LeaderboardView,
    name: 'Leaderboard',
    path: '/'
  },
  {
    component: AuthView,
    name: 'Auth',
    path: '/auth'
  },
  {
    beforeEnter: requireAuth,
    component: UserView,
    name: 'Profile',
    path: '/profile'
  },
  {
    name: 'NotFound',
    path: '/:_(.*)*',
    redirect: '/'
  }
];

export default routes;
