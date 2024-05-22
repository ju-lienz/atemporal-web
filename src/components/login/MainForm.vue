<template>

    <div class="w-full max-w-xs container">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="sendForm">
            <h1>Iniciar sesión</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                    E-mail:
                </label>
                <input
                    :class="`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`"
                    id="username" type="text" placeholder="Username" v-model="email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                    Contraseña:
                </label>
                <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************">
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>

    </div>
    <!-- <div class="container">
        <div class="form">
            <h1>Iniciar sesión</h1>
            <p>Compra más rápido y lleva el control de tus pedidos de la manera mas cómoda.</p>
            <h6 class="input-text">E-mail:</h6>
            <input type="text" name="" id="">
            <h6 class="input-text">Contraseña</h6>
            <input type="password">
            <h6 class="forgot-password">Olvidé mi contraseña</h6>
            <button>Iniciar sesión</button>
        </div>
    </div> -->
</template>

<script>
/* import { onBeforeMount, onMounted, ref } from 'vue';

onBeforeMount(() => {
    errores.value = {
        email: false,
        pass: false
    }

})

const errores = ref({
    email: false,
    pass: false
})

const email = ref("")
const password = ref("")

const sendForm = () => {
    if (!email.includes("@")) {

        errores.value = {
            ...errores.value,
            email: true
        }
    }
    if (errores.email || errores.pass) return
} */
</script>

<style scoped>
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

.container {
    width: 100%;
    border-radius: 15px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

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