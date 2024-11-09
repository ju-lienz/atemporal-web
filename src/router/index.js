import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HomeView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import ProductListView from "@/views/ProductListView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import CartView from "@/views/CartView.vue";
import { useAuthStore } from "@/stores/authStore";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/products',
        name: 'productList',
        component: ProductListView
    },
    {
        path: '/products/:id',
        name: 'detail',
        component: ProductDetailView
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
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
    {
        path: '/category/:name',
        name: 'category',
        component: ProductListView
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
})

router.beforeEach( (to, from, next) => {

    const store = useAuthStore(); 

    console.log("store", store);
    
    if ( to.matched.some(route => route.meta.requiredAuth) )
    {
        if ( null === store.user )
        {
            return next('/login');
        }

        return next();
    }
    else 
    {
        next();
    }
}) 

export default router