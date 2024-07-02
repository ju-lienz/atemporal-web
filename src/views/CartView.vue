<template>
    <div class="container pt-24 mb-4 flex gap-4">
        <div class="w-8/12">
            {{ store.count }}
            <h2 class="flex gap-2">
                <ShoppingCartIcon color="#3d3d3d" width=24 />Mi carrito
            </h2>
            <Product v-for="(product, index) in store.listProduct" :key="index" :product="product" />

        </div>
    </div>
</template>
<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue'
import Product from '@/components/cart/Product.vue';
import { useCartStore } from '@/stores/cartStore';

const store = useCartStore();

const products = [
    {

    }
]


</script>
<style scoped></style>