import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HomeView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import ProductListView from "@/views/ProductListView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

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
    },
    {
        path: '/products',
        name: 'productList',
        component: ProductListView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router