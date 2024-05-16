<template>
    <section>
        <div class="container">
            <form action="" method="post">
                <h2>¿Quieres recibir <span class="arsenica">novedades</span> y <span class="arsenica">descuentos</span> exclusivos?</h2>
                <div class="form-group">
                    <label ><StarIcon width="16" color="#593122"/>Suscribite a nuestro newsletter</label>
                    <input type="email" placeholder="Ingresa tu email" name="" id="">
                    <button><SendIcon :width="24"/></button>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>
import SendIcon from '@/assets/icons/SendIcon.vue'
import StarIcon from '@/assets/icons/StarIcon.vue'
</script>
<style scoped>
section {
    background-color: #D9D1CC;
    color: #593122;
}

form {
    display: flex;
    padding: 2rem 0;
    justify-content: space-between;
    align-items: center
}

h2, .form-group {
    width: calc(100%/2);
}

h2 {
    font-size: 2.6rem;
    font-weight: 300;
    padding-right: 10rem;
}

input {
    width: 100%;
    font-size: 1rem;
    max-width: 500px;
    padding: 1rem;
    border-radius: .5rem;
    background-color: transparent;
    border: 1px solid #593122;
    margin: 0;
    outline: none;
}

input::selection {
    border: 2px solid #593122;
}

.form-group {
    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

button {
    padding: .8rem;
    border-radius: 10px;
    border: none;
    background-color: #593122;
}

label {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    gap: .5rem;

}
</style>