import biblioteca from "../views/Biblioteca.vue"
import bienestar from "../views/Bienestar.vue"
import Cafeteria from "../views/Cafeteria.vue"
import coordinacion from "../views/Coordinacion.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', redirect: '/bienestar'},
    {path: '/biblioteca', component: biblioteca},
    {path: '/bienestar', component: bienestar},
    {path: '/cafeteria', component: Cafeteria},
    {path: '/coordinacion', component: coordinacion}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router