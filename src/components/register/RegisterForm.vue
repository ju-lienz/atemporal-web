<template>
    <div class="container !mt-16 lg:!mt-0 mx-auto w-full min-h-[calc(100vh-6rem)] pt-20 flex items-center justify-center">
        <form action="" class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
            <h1 class="font-bold text-2xl text-stone-800">Crear cuenta</h1>
            <p class="text-gray-500 pb-6">Compra más rápido y lleva el control de tus pedidos de la manera mas cómoda.
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
                <label class="block text-gray-700 text-sm font-medium mb-2">Contraseña:</label>

                <InputPassword @changePassword="(pass) => password = pass" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2">Repetir contraseña:</label>

                <InputPassword @changePassword="(pass) => repeatPassword = pass" />
            </div>
            <button
                class="bg-orange-900 block w-full hover:bg-orange-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Crear cuenta
            </button>
            <div class="flex flex-col items-center">
                <p class="text-sm text-center block py-2 text-gray-700 pt-4">¿Ya tienes una cuenta? <router-link
                        :to="{ name: 'login' }" class="text-sm font-medium text-gray-700 hover:text-secondary/90">
                        Inicia sesión</router-link></p>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import InputPassword from '@/components/login/InputPassword.vue'
const password = ref('')
const repeatPassword = ref('')
</script>
<style scoped></style>