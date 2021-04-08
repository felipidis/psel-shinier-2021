import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User'
import Cadastro from '@/views/Cadastro'

Vue.use(Router)


const routes = [
  {
    name: 'users',
    path: '/',
    component: User
  },
  {
    name: 'cadastro',
    path: '/cadastro',
    component: Cadastro
  }
]

const router = new Router({routes})

export default router
