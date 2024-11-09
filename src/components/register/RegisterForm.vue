@ -0,0 +1,76 @@
<template>
    <div class="container !mt-16 lg:!mt-0 mx-auto w-full min-h-[calc(100vh-6rem)] pt-20 flex items-center justify-center">
        <form @submit.prevent="sendForm" class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
            <h1 class="font-bold text-2xl text-stone-800">Crear cuenta</h1>
            <p class="text-gray-500 pb-6">Compra más rápido y lleva el control de tus pedidos de la manera más cómoda.</p>
            <div class="mb-4">
                <label for="cliente_nombre" class="block text-gray-700 text-sm font-medium mb-2">Nombre completo:</label>
                <input type="text" name="cliente_nombre" id="cliente_nombre" placeholder="ej: Juan Pérez" v-model="cliente_nombre" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="cliente_direccion" class="block text-gray-700 text-sm font-medium mb-2">Dirección:</label>
                <input type="text" name="cliente_direccion" id="cliente_direccion" placeholder="ej: Calle Falsa 123" v-model="cliente_direccion" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="cliente_localidad" class="block text-gray-700 text-sm font-medium mb-2">Localidad:</label>
                <input type="text" name="cliente_localidad" id="cliente_localidad" placeholder="ej: Santiago del Estero" v-model="cliente_localidad" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="cliente_email" class="block text-gray-700 text-sm font-medium mb-2">E-mail:</label>
                <input type="email" name="cliente_email" id="cliente_email" placeholder="ej: tunombre@gmail.com" v-model="cliente_email" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="cliente_telefono" class="block text-gray-700 text-sm font-medium mb-2">Número de teléfono:</label>
                <input type="tel" name="cliente_telefono" id="cliente_telefono" placeholder="ej: +54 385 5882211" v-model="cliente_telefono" required
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="cliente_password" class="block text-gray-700 text-sm font-medium mb-2">Contraseña:</label>
                <!-- <input-password @changePassword="(pass) => cliente_password = pass" /> -->
                 <input type="password" name="" id="" v-model="cliente_password"
                 class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            </div>
            
    <button class="bg-orange-900 block w-full hover:bg-orange-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Crear cuenta
            </button>
            <div class="flex flex-col items-center">
                <p class="text-sm text-center block py-2 text-gray-700 pt-4">¿Ya tienes una cuenta? <router-link :to="{ name: 'login' }" class="text-sm font-medium text-gray-700 hover:text-secondary/90">Inicia sesión</router-link></p>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ClienteAxios } from '@/config/ClienteAxios';
import { ref } from 'vue';
import InputPassword from '@/components/login/InputPassword.vue';
import client from '@/config/client';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const cliente_nombre = ref('');
const cliente_direccion = ref('');
const cliente_localidad = ref('');
const cliente_email = ref('');
const cliente_telefono = ref('');
const cliente_password = ref('');

const authStore = useAuthStore()

const sendForm = async () => {
    try {
        const formdata = ref({
            cliente_nombre: cliente_nombre.value,
            cliente_direccion: cliente_direccion.value,
            cliente_localidad: cliente_localidad.value,
            cliente_email: cliente_email.value,
            cliente_telefono: cliente_telefono.value,
            cliente_password: cliente_password.value,
        })
        // formdata.append('cliente_nombre', cliente_nombre.value)
        // formdata.append('cliente_direccion', cliente_direccion.value)
        // formdata.append('cliente_localidad', cliente_localidad.value)
        // formdata.append('cliente_email', cliente_email.value)
        // formdata.append('cliente_telefono', cliente_telefono.value)
        // formdata.append('cliente_password', cliente_password.value)
        await authStore.register(formdata.value);
       
    } catch (error) {
        console.log(error)
    }
};
</script>