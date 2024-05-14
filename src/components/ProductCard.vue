<template>
    <div class="card">
        <img src="../assets/images/imagen1.png" :alt="name">
        <h4>{{ name }}</h4>
        <h5>${{ price }}</h5>
        <p> 3 cuotas sin interés de $20.00</p>
        <button><ShoppingCartIcon /> Añadir al carrito</button>
    </div>
</template>
<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue';

const props = defineProps({
    image: {
        type: String,
        default: '../../assets/images/imagen1.jpg'
    },
    name: {
        type: String,
        default: 'Anillo Lorena'
    }, 
    price: {
        type: Float32Array,
        default: 35.6
    }

})
</script>
<style scoped>
img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: .3rem;
}

.card {
    width: calc((100% / 4) - 1rem);
    max-width: 25%;
    padding: .5rem;
    border: 1px solid #BDB3B180 ;
    border-radius: .5rem;
    text-align: center;
}

h4  {
    font-size: 1.4rem;
    margin: .5rem 0;
}
h5{
    font-size: 1.4rem;
    font-weight: 500;
}
p{
    font-size: 0.9rem;
    font-weight: 300;
}
button{
    width: 100%;
    padding: 0.5rem;
    background-color: #593122;
    color: #FBFBFB;
    border: none;
    border-radius: 0.7rem;
}
</style>
