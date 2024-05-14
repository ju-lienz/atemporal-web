<template>
    <section>
        <div class="container">
            <div class="">
                <h2 class="name-section">Nuestros favoritos</h2>
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
    display: flex;
    justify-content: space-between;
}


.container > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 0;
}


</style>