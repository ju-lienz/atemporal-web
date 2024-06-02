<template>
    <div class="container mx-auto w-full min-h-screen flex items-center justify-center">
        <form class="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl" @submit.prevent="sendForm">
            <h1>Iniciar sesión</h1>
            <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-orange-700 p-2" role="alert">
                <p class="font-bold m-2">Error</p>
                <p class="m-2">El mail o contraseña son incorrectos</p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2 pt-3" for="username">
                    E-mail:
                </label>
                <input :class="{ '!border-red-500': error }" required id="username" type="text"
                    placeholder="Ingrese su e-mail" v-model="email">

            </div>
            <div class="mb-6">
                <label class="block text-sm mb-2">Password</label>
                <div class="relative">
                    <input id="hs-toggle-password" :type="`${showPass ? 'text' : 'password'}`"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Enter password" value="12345qwerty">
                        <button type="button" @click="togglePass" class="absolute top-0 end-0 p-3.5 rounded-e-md">
                        <svg class="flex-shrink-0 size-3.5 text-gray-400" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path :class="{'hidden': showPass}" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                            <path :class="{'hidden': showPass}"
                                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68">
                            </path>
                            <path :class="{'hidden': showPass}"
                                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                            <line :class="{'hidden': showPass}" x1="2" x2="22" y1="2" y2="22"></line>
                            <path :class="{'block': showPass}"
                                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle :class="{'block': showPass}" cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
                <div class="flex justify-between">
                    <div class="">
                        <input type="checkbox" name="remember" id="remember">
                        <label for="remember">Recordarme</label>
                    </div>
                    <a href="">Olvidé mi contraseña</a>
                </div>
            </div>
            <div class="">
                <button
                    class="bg-blue-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Iniciar sesión
                </button>
                <a class="text-right font-medium hover:text-orange-800 text-xs" href="#">
                    Olvidé mi contraseña
                </a>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPass = ref(false)

const togglePass = () => showPass.value = !showPass.value

// Variables reactivas para los datos del formulario
const email = ref('');
const password = ref('');
const error = ref(false);

// Método que se ejecuta cuando se envía el formulario
const sendForm = () => {
    validateForm();
    // Si no hay errores de email y contraseña
    if (!error) {
        // Envío a la BD
        console.log('Formulario enviado exitosamente');
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

<style scoped>
/* a {
    color: #6e3c2a;
}

h1 {
    font-weight: 600;
}

.input-text {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.forgot-password {
    font-size: 1rem;
    color: #7A7A7A;
    text-decoration: underline;
    margin-bottom: 1rem;
}

button {
    width: 100%;
    padding: 0.5rem;
    background-color: #6e3c2a;
    color: #FBFBFB;
    border: none;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    gap: .5rem;
    cursor: pointer;
}

input {
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: transparent;
    border: 1px solid #593122;
    margin: 0;
    outline: none;
    color: #593122;
    margin-bottom: 0.3rem;
}

p {
    font-size: 1.1rem;
    color: #7A7A7A;
 */

/* .container {
    width: 100%;
    border-radius: 15px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* .form {
    background-color: #FBFBFB;
    border: 1px solid #E8E8E8;
    border-radius: 15px;
    max-width: 45rem;
    width: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

body {
    min-height: 100vh !important;
} */
</style>