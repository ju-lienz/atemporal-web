<template>
    <div class="container">
        <h2 class="name-section">Nuestros productos</h2>
        <div class="card-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue';


</script>
<style scoped>
.name-section {
    margin: 1rem 0;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex-direction: row;
    justify-content: flex-start;
}
</style>