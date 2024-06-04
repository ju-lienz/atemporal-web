<template>
    <div class="container">
        <div class="title">
            <h2 class="name-section">Nuestros productos</h2>
            <router-link
            class="button"
            :to="{name: 'productList'}"
            @mouseenter="handleHover"
            @mouseleave="handleHover"
            >Ver todos los productos<ArrowRightIcon :stroke="stroke"/></router-link>
        </div>
        <div class="card-container">
            <h1>{{ products[0].producto_nombre}}</h1>
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
import { onMounted, ref } from 'vue';
import { ClienteAxios } from '@/config/ClienteAxios';
const stroke = ref("#593122")
const handleHover = () => {
    stroke.value = stroke.value == "#fff" ? "#593122" : "#fff";
}

const products =  ref([])

onMounted(async() => {
    const response = await ClienteAxios.get('/Productos/')
    if (response.status == 200) {
        products.value = response.data
    }
})

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
    padding: 2rem 0;
}


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

.button:hover {
    background-color: #593122;
    color: white;
}


</style>