<template>
    <div class="container">
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
    </div>
</template>

<script>
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