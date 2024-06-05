<template>
    <div :class="`card hover:shadow-lg ${zoom ? 'hover:scale-[1.02]' : ''} transition-all `">
        <div class="bg-white shadow-md rounded-lg p-3 max-w-xs">
            <a href=" #">
                <img class="rounded-t-lg" src="../assets/images/imageProduct.png" alt="product image">
            </a>
            <div class="">
                <a href="#">
                    <h3 class="text-gray-900 font-bold text-xl tracking-tight text-center">{{ product.producto_nombre }}</h3>
                </a>

                <div class="flex items-center justify-center flex-wrap">
                    <span class="text-xl font-medium text-gray-900">${{ product.producto_precio }}</span>
                    <a href="#"
                        class="text-white py-2 bg-primary  hover:bg-secondary w-full font-medium rounded-lg text-xs mt-3 flex items-center justify-center gap-2"><ShoppingCartIcon />Añadir
                        al carrito</a>

                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue';

const props = defineProps({
    product: {
        type: Object,
        default: {
            producto_id: 1,
            producto_nombre: 'Anillo Lorena',
            producto_precio: 3123.2
        }
    },
    zoom: {
        type: Boolean,
        default: false
    }

})
</script>
<style scoped>
/* img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: .3rem;
}
**/

.card {
    width: calc((100% / 4) - .75rem);
    /* background-color: #764838; */

}

/* 
    max-width: 25%;
    background-color: #FBFBFB;
    padding: .5rem;
    border: 1px solid #BDB3B180;
    border-radius: .5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    transform: scale(1);
    color: #2d2d2d;
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

.card:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

button {
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

h4 {
    font-size: 1.4rem;
}

h5 {
    font-size: 1.4rem;
    font-weight: 500;
}

p {
    font-size: 1rem;
    font-weight: 200;
}

button:hover {
    background-color: #552e21;
} */
</style>
