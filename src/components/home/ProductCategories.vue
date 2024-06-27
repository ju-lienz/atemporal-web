<template>
    <div class="grid grid-cols-4 grid-rows-4 gap-0">
        <router-link :to="{name: 'category', params: {name: cardMarroquineria.text}}" class="col-span-4 row-span-1 md:col-span-2 md:row-span-4 overflow-hidden">
            <CategoryCard :text="cardMarroquineria.text" :two-rows="true" :image="cardMarroquineria.image" />
        </router-link>
        <router-link :to="{name: 'category', params: {name: cardRelojes.text}}" class="col-span-4 row-span-1 md:col-span-2 md:row-span-2 md:col-start-3 overflow-hidden">
            <CategoryCard :text="cardRelojes.text" :image="cardRelojes.image" />
        </router-link>
        <router-link :to="{name: 'category', params: {name: cardJoyas.text}}" class="col-span-4 row-span-1 md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-3  overflow-hidden">
            <CategoryCard :text="cardJoyas.text" :image="cardJoyas.image" />
        </router-link>
        <router-link :to="{name: 'category', params: {name: cardAccesorios.text}}" class="col-span-4 row-span-1 md:row-span-2 md:col-start-4 md:row-start-3  overflow-hidden">
            <CategoryCard :text="cardAccesorios.text" :image="cardAccesorios.image" />
        </router-link>
    </div>
</template>

<script setup>
import CategoryCard from '@/components/home/CategoryCard.vue';

const cardMarroquineria = {
    image: 'Marroquineria-categoria.jpg',
    text: 'Marroquineria',
};

const cardRelojes = {
    image: 'relojes-categoria.jpg',
    text: 'Relojes',
};

const cardJoyas = {
    image: 'Joyas-categoria.jpg',
    text: 'Joyas',
};

const cardAccesorios = {
    image: 'Accesorios-categoria.jpg',
    text: 'Accesorios',
};

</script>

<style scoped>
.button {
    position: absolute;
    top: 10%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    /* background-color: #fff; */
    padding: .5rem 1rem;
    color: #593122;
    border: 1px solid #593122;
    border-radius: 3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>