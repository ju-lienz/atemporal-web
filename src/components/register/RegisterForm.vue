<template>
    <div class="container mx-auto w-full min-h-screen flex items-center justify-center">
        <form action="" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
            <h1 class="font-bold text-2xl text-stone-800 pb-1">Crear cuenta</h1>
            <p class="text-gray-500 pb-3">Compra más rápido y lleva el control de tus pedidos de la manera mas cómoda.
            </p>
            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-medium mb-2">Nombre completo:</label>
                <input type="text" name="fullname" id="" placeholder="ej: Juan Pérez" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                    E-mail:
                </label>
                <input id="username" type="text" placeholder="ej: tunombre@gmail.com" v-model="email" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                    Número de teléfono:
                </label>
                <input id="username" type="tel" placeholder="ej: +54 385 5882211" v-model="email" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                    Contraseña:
                </label>
                <input required id="password" type="password" v-model="password"
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-6">
                <label class="block text-sm mb-2">Password</label>
                <div class="relative">
                    <input id="hs-toggle-password" :type="`${showPass ? 'text' : 'password'}`"
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md"
                        placeholder="Enter password" value="12345qwerty">
                    <button type="button" @click="togglePass" class="absolute top-0 end-0 flex items-center h-full mx-2 rounded-e-md">
                        <svg class="flex-shrink-0 size-3.5 text-gray-400" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path :class="{ 'hidden': showPass }" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                            <path :class="{ 'hidden': showPass }"
                                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68">
                            </path>
                            <path :class="{ 'hidden': showPass }"
                                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                            <line :class="{ 'hidden': showPass }" x1="2" x2="22" y1="2" y2="22"></line>
                            <path :class="{ 'block': showPass }" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z">
                            </path>
                            <circle :class="{ 'block': showPass }" cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <button
                    class="bg-orange-900 block w-full hover:bg-orange-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Crear cuenta
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPass = ref(false)

const togglePass = () => showPass.value = !showPass.value
</script>

<style scoped></style>