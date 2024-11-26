<template>
    <div
        class="border rounded-md text-gray-600 border-gray-400/60 p-2 gap-2 sm:gap-4 flex flex-col sm:flex-row w-full mb-4 bg-stone-100">
        <!-- -Imagen del producto -->
        <img :src="imagen" alt=""
            class="w-full sm:w-[10%] aspect-[14/16] object-cover rounded-md">

        <div class="w-full sm:w-5/12 relative">
            <h4 class="font-semibold text-base sm:text-lg">{{ product.producto_nombre }}</h4>
            <button @click="store.deleteProduct(product)" class="text-sm absolute bottom-0 underline cursor-pointer">Eliminar</button>
        </div>
        <div class="flex justify-center items-start w-full sm:w-2/12 mt-2">
            <p
                @click="store.substractProduct(product)"
                v-if="product.cantidad > 1"
                class="bg-primary hover:bg-secondary transition w-8 h-8 text-white rounded-full flex items-center justify-center cursor-pointer">
                -
            </p>
            <p
                @click="store.deleteProduct(product)"
                v-else
                class="bg-primary hover:bg-secondary transition w-8 h-8 text-white rounded-full flex items-center justify-center cursor-pointer">
                <TrashIcon color="white"/>
            </p>
            <p class="flex h-8 items-center px-4">{{ product.cantidad }}</p>
            <p
                @click="store.addProduct(product)"
                class="bg-primary hover:bg-secondary transition w-8 h-8 text-white rounded-full flex items-center justify-center cursor-pointer">
                +
            </p>
        </div>
        <h5 class="font-semibold text-lg sm:text-xl w-full sm:w-3/12 text-center sm:text-right sm:px-4 mt-2">
            ${{ product.producto_precio }}
        </h5>
    </div>
</template>
<script setup>
import {useCartStore} from '@/stores/cartStore'
import TrashIcon from '@/assets/icons/TrashIcon.vue'
import { ref } from 'vue';

const store = useCartStore()
defineProps({
    product: {
        type: Object,
        default: {
        }
    },
})

const imagen = ref(`${import.meta.env.VITE_API_URL}/api/${product.producto_imagen}`)



</script>
<style scoped></style>