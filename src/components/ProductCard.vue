<template>
    <router-link :to="{ name: 'detail', params: { id: product.producto_id } }"
        :class="`card bg-white shadow-md m-1 rounded-lg max-w-xs overflow-hidden hover:shadow-lg ${zoom ? 'hover:scale-[1.02]' : ''} transition-all `">
        <img class="w-full h-40 object-cover" src="../assets/images/imageProduct.png" alt="product image">
        <div class="p-3">
            <h3 class="text-gray-900 font-bold text-xl tracking-tight truncate">{{ product.producto_nombre
                }}
            </h3>
            <p class="font-thin mb-2 text-sm text-gray-500 truncate line-clamp-2 min-h-10 whitespace-normal">{{
                product.producto_descripcion }}</p>
            <h4 class="text-xl font-semibold text-gray-900">${{ product.producto_precio }}</h4>
            <a href="#"
                class="text-white py-2 bg-primary  hover:bg-secondary w-full transition font-medium rounded-lg text-xs mt-3 flex items-center justify-center gap-2">
                <ShoppingCartIcon />Añadir al carrito
            </a>
        </div>
    </router-link>
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
.card {
    width: calc((100% / 4) - .75rem);
}
</style>
