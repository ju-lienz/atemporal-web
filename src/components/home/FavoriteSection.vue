<template>
    <section id="favorite-section" class="overflow-hidden max-w-full">
        <div class="container lg:flex block justify-between">
            <div class="">
                <h2 class="name-section !text-3xl lg:!text-4xl leading-[1.2]">Nuestros favoritos</h2>
                <StarIcon color="#593122" width="30" />
            </div>
            <div class="flex flex-col md:flex-row">
                <FavoriteCard />
                <FavoriteCard />
                <FavoriteCard />
            </div>
        </div>
    </section>
</template>
<script setup>
import StarIcon from '@/assets/icons/StarIcon.vue';
import FavoriteCard from './FavoriteCard.vue';

</script>
<style scoped>
section {
    background-color: #D9D1CC;
}



.container>div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 0;
}
</style>