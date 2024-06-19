<template>
    <footer>
        <div class="container">
            <h1 class="atemporal">Atemporal</h1>
            <ul class="list-none">
                <RouterLink :to="{ name: 'productList' }">
                    <li class="font-bold text-lg mb-2">Productos</li>
                </RouterLink>
                <li class="mb-2">
                    <a href="">Joyas</a>
                </li>
                <li class="mb-2">
                    <a href="">Accesorios</a>
                </li>
                <li class="mb-2">
                    <a href="">Relojes</a>
                </li>
                <li class="mb-2">
                    <a href="">Marroquinería</a>
                </li>
            </ul>
            <ul class="">
                <li class="font-bold text-lg">Contacto</li>
                <li class="mb-2">
                    <SmsIcon />atemporalrelojes@gmail.com
                </li>
                <li class="mb-2">
                    <CallIcon />+5493856121301
                </li>
            </ul>
            <ul class="">
                <li class="font-bold text.lg">Ayuda</li>
                <a href="">
                    <li class="mb-2">Contáctanos</li>
                </a>
            </ul>
            <div class="bottom">
                Atemporal &copy; 2024. Todos los derechos reservados.
            </div>
        </div>
    </footer>
</template>
<script setup>
import CallIcon from '@/assets/icons/CallIcon.vue';
import SmsIcon from '@/assets/icons/SmsIcon.vue';
</script>
<style scoped>
footer {
    background-color: #593122;
    color: white;
}

.container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 2rem;
    gap: 2rem 8rem;
    letter-spacing: .05rem;
}

.atemporal {
    place-self: center;
}

ul {
    width: calc((100%/4) - 16rem);
    min-width: 200px;
}

ul:nth-child(3) {
    width: calc((100%/4) - 2rem);

}

ul>li {
    /* font-size: .9rem;
    font-weight: 100; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: .5rem;

    color: #FBFBFB;
}

ul>li:first-child {
    /* font-weight: 400; */
    margin-bottom: 1rem;
}

.bottom {
    width: 100%;
    border-top: 1px solid white;
    text-align: center;
    padding: 1rem;
    padding-bottom: 2rem;
    font-weight: 200;

}
</style>