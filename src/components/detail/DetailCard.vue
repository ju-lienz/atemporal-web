<template>
    <div class="container !py-28 flex-wrap min-h-screen">
        <div class="image-container w-full  md:w-1/2">
            <img :src="`http://127.0.0.1:8000/storage/${product.producto_imagen}`" alt=""
                class="primary-image aspect-square overflow-hidden object-cover rounded-md">
        </div>
        <div class="text-container pt-1 md:pl-10 w-full md:w-1/2 md:max-w-lg">
            <h1 class="arsenica text-3xl pb-1 font-semibold text-[#423F3E]">{{ product.producto_nombre }}</h1>
            <p class=" text-[#423F3E] text-lg">{{ product.producto_descripcion }}
            </p>
            <h3 class="price font-semibold text-3xl py-6 text-[#423F3E]">${{ product.producto_precio }}</h3>
            <h6 class="text-base underline font-[1.5rem] text-[#423F3E] pb-8">Ver formas
                de pago</h6>
            <button @click="store.addProduct(product)"
                class="w-full p-2 bg-[#6e3c2a] text-[#FBFBFB] rounded-[0.3rem] flex justify-center gap-2 cursor-pointer">
                <ShoppingCartIcon /> Añadir al carrito
            </button>
            <p class="mt-6 mb-[0.2rem]">Costo de envío:</p>
            <input type="text"
                class="h-12 w-full text-base p-4 rounded-lg bg-transparent border border-[#593122] focus:outline-none">
            <a href="">
                <h6 class="text-[#847E7A] text-[0.9rem] mt-[0.6rem] underline">No sé mi código postal</h6>
            </a>
        </div>
    </div>
</template>

<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue';
import { ClienteAxios } from '@/config/ClienteAxios';
import { useCartStore } from '@/stores/cartStore';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();

const product = ref({})
const store = useCartStore();


onBeforeMount(async () => {

    const id = route.params.id;
    const response = await ClienteAxios.get(`Productos/${id}`);
    if (response.status == 200) {
        product.value = response.data
    }
});

</script>

<style scoped>
.container {
    display: flex;
}

.image-container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 5px 5px;
    grid-template-areas:
        "secondary-image primary-image primary-image"
        "tertiary-image primary-image primary-image"
        ". primary-image primary-image"
        ". primary-image primary-image"
        ". primary-image primary-image";
}

.primary-image {
    grid-area: primary-image;
    width: 100%;
}

.secondary-image {
    grid-area: secondary-image;
    width: 100%;
}

.tertiary-image {
    grid-area: tertiary-image;
    width: 100%;
}
</style>