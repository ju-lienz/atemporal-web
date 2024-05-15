<template>
    <div class="container">
        <div class="title">
            <h2 class="name-section">Nuestros productos</h2>
            <button
            @mouseenter="handleHover"
            @mouseleave="handleHover"
            >Ver todos los productos<ArrowRightIcon :stroke="stroke"/></button>
        </div>
        <div class="card-container">
            <ProductCard />
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
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon.vue';
import { ref } from 'vue';
const stroke = ref("#593122")
const handleHover = () => {
    stroke.value = stroke.value == "#fff" ? "#593122" : "#fff";
}


</script>
<style scoped>
.name-section {
    margin: 1rem 0;
}


.title {
    /* display: flex; */
    justify-content: space-between;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;
}

.container{
    padding-top: 2rem;
}


button {
    position: absolute;
    top: 10%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color: #fff;
    padding: .5rem 1rem;
    color: #593122;
    border: 1px solid #593122;
    border-radius: 3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

button:hover {
    background-color: #593122;
    color: white;
}


</style>