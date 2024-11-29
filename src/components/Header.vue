<template>
    <header class="hidden lg:block">
        <div class="header-container">
            <RouterLink :to="{ name: 'home' }">
                <h1 class="atemporal">Atemporal</h1>
            </RouterLink>
            <ul>
                <li>
                    <router-link :to="{ name: 'category', params: 'Relojes' }">Relojes</router-link>
                </li>
                <li>Accesorios </li>
                <li>Ofertas</li>
                <li>Nosotros</li>
            </ul>
            <ul>
                <a v-if="authStore.user != null" @click="authStore.logout">Cerrar sesión</a>
                <router-link v-else :to="{ name: 'login' }">Iniciar sesión</router-link>
                <RouterLink :to="{ name: 'cart' }">
                    <CartIconVue />
                    <span
                        class="absolute -top-2 -right-2 rounded-full bg-red-600 flex items-center justify-center aspect-square w-5 text-center"
                        style="font-size: .7rem; line-height: .7rem;">{{ store.quantityOfProducts }}</span>
                </RouterLink>
            </ul>
        </div>
    </header>

    <!-- HEADER MOBILE -->
    <header class="lg:hidden !fixed top-0 left-0 justify-between items-center px-4 py-1 overflow-hidden transition-all">
        <div class="flex justify-between w-full items-center">
            <MenuIcon color="white" class="cursor-pointer w-1/12" @click="menu = !menu" />
            <RouterLink :to="{ name: 'home' }">
                <h1 class="atemporal">Atemporal</h1>
            </RouterLink>
            <SearchIcon color="white" class="cursor-pointer" @click="search = !search" />
        </div>
        <div class=" transition-all ease-linear origin-top overflow-hidden h-auto" :class="{
            'scale-y-0 max-h-0 p-0': !search,
            'scale-y-100 max-h-full py-1': search,

        }">
            <input type="text" class="w-full p-2 pr-10 rounded-md text-primary">
            <CloseIcon color="fill-primary" :size="14" class="absolute top-1/2 right-3 -translate-y-1/2 "
                @click="search = false" />
        </div>

    </header>


    <div class="block lg:hidden transition-transform duration-300  bg-white z-50 w-full top-0  h-dvh max-w-xs fixed select-none text-primary"
        :class="{
            'translate-x-0': menu,
            '-translate-x-full': !menu
        }">
        <CloseIcon color="fill-primary" class="w-4 absolute top-4 right-4 cursor-pointer" @click="menu = !menu" />
        <ul class="flex flex-col w-full items-start justify-start !gap-0  text-primary text-lg mt-16">
            <li class="font-medium w-full p-4 transition-all  hover:bg-primary/15">Inicio</li>
            <li class="font-medium w-full p-4 transition-all  hover:bg-primary/15">Ofertas</li>
            <details class="font-medium w-full">
                <summary class="font-medium flex justify-between  p-4 transition-all  hover:bg-primary/15">Productos
                    <ArrowSimpleIcon color="stroke-primary !stroke-2" />
                </summary>
                <ul class="flex flex-col !gap-0">
                    <li class="font-medium w-full p-4 pl-8 transition-all  hover:bg-primary/15">Relojes</li>
                    <li class="font-medium w-full p-4 pl-8 transition-all  hover:bg-primary/15">Accesorios</li>
                    <li class="font-medium w-full p-4 pl-8 transition-all  hover:bg-primary/15">Ofertas</li>

                </ul>
            </details>
            <li class="font-medium w-full p-4 transition-all  hover:bg-primary/15">Contacto</li>
            <li class="font-medium w-full p-4 transition-all  hover:bg-primary/15">Ayuda</li>
        </ul>
        <div v-if="authStore.user != null" class="absolute w-full bottom-0 flex justify-between text-center">
            <a @click="authStore.logout"
                class="w-full py-4 font-medium cursor-pointer transition-all hover:bg-primary/15">Cerrar sesión</a>
        </div>
        <div v-else class=" absolute w-full bottom-0 flex justify-between text-center">
            <router-link :to="{ name: 'register' }"
                class="w-1/2 py-4  font-medium cursor-pointer transition-all  hover:bg-primary/15">Crear
                cuenta</router-link>
            <router-link :to="{ name: 'login' }"
                class="w-1/2  py-4 font-medium cursor-pointer transition-all  hover:bg-primary/15">Iniciar
                sesión</router-link>
        </div>
    </div>
    <div class="lg:hidden transition-all fixed top-0 left-0 h-dvh w-full z-40" :class="{
        'bg-black/50 block': menu,
        'bg-transparent hidden': !menu
    }" @click="menu = !menu"></div>
</template>
<script setup>
import MenuIcon from '@/assets/icons/MenuIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import CloseIcon from '@/assets/icons/CloseIcon.vue'
import ArrowSimpleIcon from '@/assets/icons/ArrowSimpleIcon.vue'
import CartIconVue from '@/assets/icons/CartIcon.vue'

import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore();

const menu = ref(false)
const search = ref(false)
const store = useCartStore()
</script>
<style scoped>
header {
    width: 100%;
    background-color: #8c6945;
    position: absolute;
    top: 0;
    z-index: 30;
    color: #FBFBFB;
    border-bottom: 1px solid #fbfbfb93;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    user-select: none;
}

header:hover {
    box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.5);
}

.header-container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
}

ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    cursor: pointer;

}

.icono {
    aspect-ratio: 1/1;
    height: 1.3rem;
}

.atemporal {
    cursor: pointer;
    font-size: 2rem;
}
</style>