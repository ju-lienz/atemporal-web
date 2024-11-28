<template>
    <div
        :class="`w-[calc(100%/2-.75rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1.1rem)] bg-white shadow-md m-1 rounded-lg overflow-hidden hover:shadow-lg ${zoom ? 'hover:scale-[1.02]' : ''} transition-all `">
        <router-link :to="{ name: 'detail', params: { id: product.id } }">
            <img class="w-full h-40 object-cover" :src="imagen"
                alt="product image">
            <div class="p-3 pb-0">
                <h3 class="text-gray-900 font-bold text-xl tracking-tight truncate">{{ product.producto_nombre
                    }}
                </h3>
                <p class="font-thin mb-2 text-sm text-gray-500 truncate line-clamp-2 min-h-10 whitespace-normal">{{
                    product.producto_descripcion }}</p>
                <h4 class="text-xl font-semibold text-gray-900">${{ product.producto_precio }}</h4>
            </div>
        </router-link>
        <div class="p-3 pt-0">
            <button @click="store.addProduct(product)" href="#"
                class="text-white py-2 bg-primary  hover:bg-secondary w-full transition font-medium rounded-lg text-xs mt-3 flex items-center justify-center gap-2">
                <ShoppingCartIcon />Añadir al carrito
            </button>
        </div>
    </div>
</template>
<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue';
import { useCartStore } from '@/stores/cartStore';
import { computed, ref } from 'vue';

const store = useCartStore();
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
const imagen = ref(`${import.meta.env.VITE_API_URL}/${props.product.producto_imagen}`)
</script>
<style scoped>
.card {
    width: calc((100% / 4) - .75rem);
}
</style>
