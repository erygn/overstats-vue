import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login'
import About from '../views/About'
import Add from "@/views/Add";
import Register from "@/views/Register";
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
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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

router.beforeEach((to, from, next) => {
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