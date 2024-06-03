<template>
    <div class="grid grid-cols-4 grid-rows-4 gap-0">
        <div class="col-span-2 row-span-4">
            <CategoryCard :text="cardMarroquineria.text" :image="cardMarroquineria.image" />
        </div>
        <div class="col-span-2 row-span-2 col-start-3">
            <CategoryCard :text="cardRelojes.text" :image="cardRelojes.image" />
        </div>
        <div class="row-span-2 col-start-3 row-start-3">
            <CategoryCard :text="cardJoyas.text" :image="cardJoyas.image" />
        </div>
        <div class="row-span-2 col-start-4 row-start-3">
            <CategoryCard :text="cardAccesorios.text" :image="cardAccesorios.image" />
        </div>
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

<style scoped></style>