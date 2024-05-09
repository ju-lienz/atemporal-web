<template>
    <section>
        <div class="container">
            <div class="name-section">
                Nuestros Favoritos
                <StarIcon color="#593122" width="40"/>
            </div>
            <div :style=" {
                display: 'flex'
            }">
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

.container {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.name-section {
    font-family: 'Arsenica Trial';
    color: #593122;
    font-size: 2.5rem;
    font-weight: 500;
    /* font-size: clamp(20px, 4rem, 24px) */
    max-width: 20%;
    display: flex;
    text-align: center;
    padding: 1rem;
}
</style>