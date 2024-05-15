import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HomeView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/detail',
        name: 'detail',
        component: ProductDetailView
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})


export default router