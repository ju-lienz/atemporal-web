<template>
    <div class="card">
        <img src="../assets/images/imagen1.png" :alt="name">
        <h4>{{ name }}</h4>
        <h5>${{ price }}</h5>
        <p> 3 cuotas sin interés de $20.00</p>
        <button

        ><ShoppingCartIcon /> Añadir al carrito</button>
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
    width: calc((100% / 4) - .75rem);
    max-width: 25%;
    padding: .5rem;
    border: 1px solid #BDB3B180 ;
    border-radius: .5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    transform: scale(1);
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);}

h4  {
    font-size: 1.4rem;
}
h5{
    font-size: 1.4rem;
    font-weight: 500;
}
p{
    font-size: 1rem;
    font-weight: 200;
}
button{
    width: 100%;
    padding: 0.5rem;
    background-color: #6e3c2a;
    color: #FBFBFB;
    border: none;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    gap: .5rem;
    cursor: pointer;
}

button:hover {
    background-color: #552e21;
}
</style>
