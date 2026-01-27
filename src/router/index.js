import { createRouter, createWebHistory } from 'vue-router'

// Importamos los componentes con los nombres reales de tus archivos
import Home from '../views/Home.vue'                  // ← Home.vue (no HomeView)
import QuienSoy from '../views/QuienSoy.vue'          // ← QuienSoy.vue
import MisCompromisos from '../views/MisCompromisos.vue'
import Cagadas102 from '../views/102Cagadas.vue'      // ← 102Cagadas.vue (puedes renombrar la variable)
import Unete from '../views/Unete.vue'
import GastosHormiga from '../views/GastosHormiga.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quien-soy',
    name: 'quien-soy',
    component: QuienSoy
  },
  {
    path: '/mis-compromisos',
    name: 'mis-compromisos',
    component: MisCompromisos
  },
  {
    path: '/102-cagadas',
    name: '102-cagadas',
    component: Cagadas102  
  },
  {
    path: '/unete',
    name: 'unete',
    component: Unete
  },
  {
    path: '/gastos-hormiga',
    name: 'gastos-hormiga',
    component: GastosHormiga
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router