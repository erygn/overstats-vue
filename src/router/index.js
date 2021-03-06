import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login'
import About from '../views/About'
import Settings from "@/views/Settings";
import Team from '@/views/Team';
import Teams from "@/views/Teams";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/addMatch',
    name: 'AddMatch',
    component: addMatch,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/gameadd',
    name: 'GameAdd',
    component: GameAdd,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },

  {
    path: '/tee',
    name: 'Tee',
    component: tee,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/teamPlayer',
    name: 'teamPlayer',
    component: teamPlayer,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/winRate',
    name: 'winRate',
    component: winRate,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/compo',
    name: 'compo',
    component: Compo,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
    props(route) {
      return route.query || {}
    },
    meta: {
      requireAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


import firebase from "firebase";
import addMatch from "@/views/addMatch";
import GameAdd from "@/views/GameAdd";
import tee from "@/views/tee";
import teamPlayer from "@/views/teamPlayer";
import winRate from "@/views/winRate";
import Compo from "@/views/Compo";
import Game from "@/views/Game";
import Map from "@/views/Map";

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);

  if (requireAuth && !currentUser) {
    next('login');
  }
  else if (!requireAuth && currentUser) {
    next('/');
  }
  else { next(); }
})

export default router
