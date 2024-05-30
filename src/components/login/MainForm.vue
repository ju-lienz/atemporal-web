<template>
    <div class="container mx-auto w-full min-h-screen flex items-center justify-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl" @submit.prevent="sendForm">
            <h1>Iniciar sesión</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                    E-mail:
                </label>
                <input :class="{ '!border-red-500': emailError }" required id="username" type="text"
                    placeholder="Username" v-model="email">

            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                    Contraseña:
                </label>
                <input :class="{ '!border-red-500': passwordError }" required id="password" type="password"
                    placeholder="*******" v-model="password">
            </div>
            <div class="">
                <button
                    class="bg-blue-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Iniciar sesión
                </button>
                <a class="text-right font-bold hover:text-orange-800 text-xs" href="#">
                    Olvidé mi contraseña
                </a>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Variables reactivas para los datos del formulario
const email = ref('');
const password = ref('');
const emailError = ref(false);
const passwordError = ref(false);

// Método que se ejecuta cuando se envía el formulario
const sendForm = () => {
    validateForm();
    // Si no hay errores de email y contraseña
    if (!emailError.value && !passwordError.value) {
        // Envío a la BD
        console.log('Formulario enviado exitosamente');
    }
};

// Método que realiza la validación del formulario
const validateForm = () => {
    emailError.value = false;
    passwordError.value = false;

    if (!validateEmail(email.value)) {
        emailError.value = true;
    }

    if (password.value.length < 6) {
        passwordError.value = true;
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
a {
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
    margin: 1rem 0rem 1rem 0rem;
}

/* .container {
    width: 100%;
    border-radius: 15px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} */

.form {
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
}
</style>