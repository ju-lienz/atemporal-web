<template>
    <div class="container py-24 flex gap-4">
        <div class="w-8/12">
            <h2 class="flex gap-2 mb-5">
                <ShoppingCartIcon color="#3d3d3d" width=24 />Mi carrito
            </h2>
            <div class="flex items-center justify-between border-b border-gray-300 py-4">
                <img src="https://via.placeholder.com/150" alt="product image"
                    class="w-24 h-24 object-cover rounded-md">
                <div class="flex-1 px-4">
                    <h3 class="text-lg font-semibold">Reloj Atemporal</h3>
                    <p class="text-sm text-gray-500">Reloj de diseño clásico y elegante.</p>
                    <button class="text-red-500 text-sm mt-2 underline">Eliminar</button>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center">-</button>
                    <span class="text-lg font-semibold">1</span>
                    <button
                        class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center">+</button>
                </div>
                <p class="text-lg font-semibold">$2.500</p>
            </div>
            <div class="flex items-center justify-between border-b border-gray-300 py-4">
                <img src="https://via.placeholder.com/150" alt="product image"
                    class="w-24 h-24 object-cover rounded-md">
                <div class="flex-1 px-4">
                    <h3 class="text-lg font-semibold">Pulsera de cuero</h3>
                    <p class="text-sm text-gray-500">Pulsera de cuero genuino, ideal para toda ocasión.</p>
                    <button class="text-red-500 text-sm mt-2 underline">Eliminar</button>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center">-</button>
                    <span class="text-lg font-semibold">2</span>
                    <button
                        class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center">+</button>
                </div>
                <p class="text-lg font-semibold">$1.500</p>
            </div>
            <div class="flex items-center justify-between border-b border-gray-300 py-4">
                <img src="https://via.placeholder.com/150" alt="product image"
                    class="w-24 h-24 object-cover rounded-md">
                <div class="flex-1 px-4">
                    <h3 class="text-lg font-semibold">Gafas de sol</h3>
                    <p class="text-sm text-gray-500">Gafas de sol con protección UV.</p>
                    <button class="text-red-500 text-sm mt-2 underline">Eliminar</button>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center">-</button>
                    <span class="text-lg font-semibold">1</span>
                    <button
                        class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center">+</button>
                </div>
                <p class="text-lg font-semibold">$3.000</p>
            </div>
        </div>
        <div class="max-w-lg w-4/12 border-gray-400/60 border m-1 p-4 rounded-md mt-[calc(3.8rem)] bg-stone-100 mb-54">
            <h2 class="text-xl pb-2 font-semibold">Resumen de mi orden</h2>
            <div class="border border-gray-200"></div>
            <label class="block text-gray-700 text-m font-normal mb-2 pt-2 pb-1" for="username">
                Cupón de descuento:
            </label>
            <input
                class="border-0 py-2 pl-2 outline-zinc-400 bg-transparent block text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md w-full"
                type="text" placeholder="Ingrese su cupón">
            <div class="flex justify-between">
                <h2 class="text-lg py-3 inline font-semibold">Total:</h2>
                <h2 class="text-xl py-3 inline">$7.000</h2>
            </div>
            <button class="bg-primary py-2 text-white rounded-md w-full mb-3">Finalizar compra</button>
            <button class="bg-transparent py-2 text-primary rounded-md w-full border-primary border-2">Seguir
                comprando</button>
        </div>
    </div>
</template>

<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue'
</script>

<style scoped></style>