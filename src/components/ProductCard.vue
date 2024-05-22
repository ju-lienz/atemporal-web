<template>
    <div class="card">
        <div class="bg-white shadow-md rounded-lg p-3 max-w-xs">
            <a href=" #">
                <img class="rounded-t-lg" src="../assets/images/imageProduct.png" alt="product image">
            </a>
            <div class="">
                <a href="#">
                    <h3 class="text-gray-900 font-semibold text-xl tracking-tight">Anillo Lorena</h3>
                </a>

                <div class="flex items-center justify-between flex-wrap">
                    <span class="text-xl font-medium text-gray-900">$12.500</span>
                    <a href="#"
                        class="text-white bg-primary hover:bg-secondary focus:ring-4 w-full focus:ring-blue-300 font-medium rounded-lg text-xs px-5  py-2 mt-3 text-center">Añadir
                        al carrito</a>

                </div>
            </div>
        </div>
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
