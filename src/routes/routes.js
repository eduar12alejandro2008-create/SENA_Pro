import biblioteca from "../views/Biblioteca.vue"
import bienestar from "../views/Bienestar.vue"
import Cafeteria from "../views/Cafeteria.vue"
import coordinacion from "../views/Coordinacion.vue"
import Enfermeria from "../views/enfermeria.vue"
import Acerca from "../views/acerca.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', redirect: '/bienestar'},
    {path: '/biblioteca', component: biblioteca},
    {path: '/bienestar', component: bienestar},
    {path: '/cafeteria', component: Cafeteria},
    {path: '/enfermeria', component: Enfermeria},
    {path: '/coordinacion', component: coordinacion},
    {path: '/acerca', component: Acerca},

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router