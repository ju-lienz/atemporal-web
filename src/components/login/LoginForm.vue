@ -0,0 +1,99 @@
<template>
    <div class="container  mx-auto w-full min-h-screen flex items-center justify-center">
        <form class="bg-white  shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-xl" @submit.prevent="sendForm">
            <h1 class="mb-4 font-bold text-2xl text-stone-800">Iniciar sesión</h1>
            <!-- mensaje de inicio de sesion incorrecto -->
            <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-orange-700 p-2 mb-4" role="alert">
                <p class="font-bold m-2 text-sm">Error</p>
                <p class="m-2 text-sm">El mail o contraseña son incorrectos</p>
            </div>
            <div v-if="loginSuccess" class="bg-green-100 border-l-4 border-green-600 text-green-700 p-2 mb-4"
                role="alert">
                <p class="font-bold m-2 text-sm">¡Éxito!</p>
                <p class="m-2 text-sm">Has iniciado sesión correctamente</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                    E-mail:
                </label>
                <input :class="{ '!border-red-500': error }"
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md"
                    required id="username" type="text" placeholder="Ingrese su e-mail" v-model="email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2">Contraseña:</label>
                <input type="password" name="" id="" v-model="password"
                    class="border-0 p-3 outline-zinc-400 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
                <div class="flex justify-between py-2">
                    <div class="inline-flex items-center gap-2 ">
                        <div class="relative flex cursor-pointer items-center rounded-full" data-ripple-dark="true">
                            <input type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  checked:bg-secondary"
                                id="remember" checked />
                            <div
                                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                    fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <label for="remember" class="cursor-pointer text-sm">Recordarme</label>
                    </div>

                    <a href="#!" class="text-sm text-center block py-2 text-gray-700 hover:text-secondary/60">Olvidé mi
                        contraseña</a>
                </div>
            </div>
            <button
                class="bg-orange-900 block w-full hover:bg-orange-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Crear cuenta
            </button>
            <div class="flex flex-col items-center">
                <p class="text-s text-center block py-2 text-gray-700 pt-4">¿No tienes una cuenta? <router-link
                        :to="{ name: 'register' }"
                        class="text-s font-medium text-gray-700 hover:text-secondary/90">Regístrate
                        aquí</router-link></p>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import InputPassword from '@/components/login/InputPassword.vue'
import { useAuthStore } from '@/stores/authStore';


// Variables reactivas para los datos del formulario
const email = ref('');
const password = ref('');
const error = ref(false);
const loginSuccess = ref(false);

const authStore = useAuthStore();

// Método que se ejecuta cuando se envía el formulario
const sendForm = async () => {
    error.value = false;
    loginSuccess.value = false;
    validateForm();

    try {
        const formdata = ref({
            cliente_email: email.value,
            cliente_password: password.value,
        })
        await authStore.login(formdata.value);
        loginSuccess.value = true;

    } catch (err) {
        console.log(err);
        error.value = true;
    }

};

// Método que realiza la validación del formulario
const validateForm = () => {
    error.value = false;

    if (!validateEmail(email.value)) {
        error.value = true;
    }

    if (password.value.length < 6) {
        error.value = true;
    }
};

// Método que valida el formato del correo electrónico
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // La función test de la expresión regular verifica si el
    // email ingresado coincide con el patrón definido.
    // Si coincide, retorna true, indicando un email válido.
    return re.test(email);
};
</script>
<style scoped></style>