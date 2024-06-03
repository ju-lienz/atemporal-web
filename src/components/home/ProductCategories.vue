<template>
    <div class="grid grid-cols-4 grid-rows-2 gap-0">
        <div class="col-span-2 row-span-2">
            <CategoryCard :text="cardMarroquineria.text" :image="cardMarroquineria.image" />
        </div>
        <div class="col-span-2 col-start-3">Relojes</div>
        <div class="col-start-3 row-start-2">Joyas</div>
        <div class="col-start-4 row-start-2">Accesorios</div>
    </div>
</template>

<script setup>
import CategoryCard from '@/components/home/CategoryCard.vue';

const cardMarroquineria = {
    image: 'Marroquineria-categoria.jpg',
    text: 'Marroquineria',
};



</script>

<style scoped></style>