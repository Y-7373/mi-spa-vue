
import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Condicionales from '../views/Condicionales.vue'
import Mostrar from '../views/Mostrar.vue'
import Listas from '../views/Listas.vue'
import Claves from '../views/Claves.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Inicio },
    { path: '/condicionales', component: Condicionales },
    { path: '/v-show', component: Mostrar },
    { path: '/v-for', component: Listas },
    { path: '/key', component: Claves }
  ]
})

export default router
