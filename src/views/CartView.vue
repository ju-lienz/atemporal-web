<template>
    <div class="container pt-24 mb-4 flex gap-4">
        <div class="w-8/12">

            <h2 class="flex gap-2">
                <ShoppingCartIcon color="gray-700" />Mi carrito
            </h2>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
</template>
<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue'
import Product from '@/components/cart/Product.vue';


const products = [
    {
        
    }
]


</script>
<style scoped></style>