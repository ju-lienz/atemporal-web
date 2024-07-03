<template>
    <header class="hidden lg:block">
        <div class="header-container">
            <RouterLink :to="{ name: 'home' }">
                <h1 class="atemporal">Atemporal</h1>
            </RouterLink>
            <ul>
                <li>Relojes</li>
                <li>Accesorios </li>
                <li>Ofertas</li>
                <li>Nosotros</li>
                <li>Accesorios</li>
            </ul>
            <ul>
                <router-link :to="{ name: 'login' }">Iniciar sesión</router-link>
                <RouterLink :to="{ name: 'cart' }">
                    <svg class="icono" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5 8.63005C16.09 8.63005 15.75 8.29005 15.75 7.88005V6.50005C15.75 5.45006 15.3 4.43005 14.52 3.72005C13.73 3.00005 12.71 2.67005 11.63 2.77005C9.83 2.94005 8.25 4.78005 8.25 6.70005V7.67005C8.25 8.08005 7.91 8.42005 7.5 8.42005C7.09 8.42005 6.75 8.08005 6.75 7.67005V6.69005C6.75 4.00005 8.92 1.52005 11.49 1.27005C12.99 1.13005 14.43 1.60005 15.53 2.61005C16.62 3.60005 17.25 5.02005 17.25 6.50005V7.88005C17.25 8.29005 16.91 8.63005 16.5 8.63005Z"
                            fill="#fff" />
                        <path
                            d="M14.9998 22.75H8.99982C4.37982 22.75 3.51982 20.6 3.29982 18.51L2.54982 12.52C2.43982 11.44 2.39982 9.89 3.44982 8.73C4.34982 7.73 5.83982 7.25 7.99982 7.25H15.9998C18.1698 7.25 19.6598 7.74 20.5498 8.73C21.5898 9.89 21.5598 11.44 21.4498 12.5L20.6998 18.51C20.4798 20.6 19.6198 22.75 14.9998 22.75ZM7.99982 8.75C6.30982 8.75 5.14982 9.08 4.55982 9.74C4.06982 10.28 3.90982 11.11 4.03982 12.35L4.78982 18.34C4.95982 19.94 5.39982 21.26 8.99982 21.26H14.9998C18.5998 21.26 19.0398 19.95 19.2098 18.36L19.9598 12.35C20.0898 11.13 19.9298 10.3 19.4398 9.75C18.8498 9.08 17.6898 8.75 15.9998 8.75H7.99982Z"
                            fill="#fff" />
                        <path
                            d="M15.4202 13.1499C14.8602 13.1499 14.4102 12.6999 14.4102 12.1499C14.4102 11.5999 14.8602 11.1499 15.4102 11.1499C15.9602 11.1499 16.4102 11.5999 16.4102 12.1499C16.4102 12.6999 15.9702 13.1499 15.4202 13.1499Z"
                            fill="#fff" />
                        <path
                            d="M8.42016 13.1499C7.86016 13.1499 7.41016 12.6999 7.41016 12.1499C7.41016 11.5999 7.86016 11.1499 8.41016 11.1499C8.96016 11.1499 9.41016 11.5999 9.41016 12.1499C9.41016 12.6999 8.97016 13.1499 8.42016 13.1499Z"
                            fill="#fff" />
                    </svg>
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

        }" >
            <input type="text" class="w-full p-2 pr-10 rounded-md text-primary">
            <CloseIcon color="fill-primary" :size="14" class="absolute top-1/2 right-3 -translate-y-1/2 " @click="search = false"/>
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
        <div class="absolute w-full bottom-0 flex justify-between text-center ">
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
import { ref } from 'vue';

const menu = ref(false)
const search = ref(false)
</script>
<style scoped>
header {
    width: 100%;
    background-color: #8c6945b7;
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