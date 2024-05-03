import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HomeView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})


export default router