<template>
    <div class="container pt-24 mb-4 flex gap-4">
        <div class="w-8/12">
            <h2 class="flex gap-2 mb-5">
                <ShoppingCartIcon color="#3d3d3d" width=24 />Mi carrito
            </h2>
            <Product v-for="(product, index) in store.listProduct" :key="index" :product="product" />
            <div class="max-w-lg">
                <h2>Resumen de mi orden</h2>
                <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                    Cupón de descuento
                </label>
                <input
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md"
                    type="text" placeholder="Ingrese su cupón">
                <h2>Total:</h2>
                <button class="bg-primary py-2 px-12 text text-white rounded-md">Finalizar compra</button>
                <div class="m-10"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue'
import Product from '@/components/cart/Product.vue';
import { useCartStore } from '@/stores/cartStore';

const store = useCartStore();

</script>
<style scoped></style>