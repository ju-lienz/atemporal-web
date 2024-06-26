<template>
    <section>
        <div class="container px-4 !py-4">
            <form action="" method="post" class="flex flex-col lg:flex-row w-full">
                <h2 class="!w-full !text-2xl !p-0 md:!text-5xl lg:!pr-40">¿Quieres recibir <span
                        class="arsenica md:!text-5xl !text-2xl">novedades</span> y <span
                        class="arsenica md:!text-5xl !text-2xl">descuentos</span>
                    exclusivos?</h2>
                <div class="form-group !w-full lg:w-[calc(100%/2)] my-4">
                    <label class="!text-base">
                        <StarIcon width="18" color="#593122" />Suscribite a nuestro newsletter
                    </label>
                    <div class="flex gap-2 w-full">
                        <input type="email" placeholder="Ingresa tu email" name="" id="">
                        <button>
                            <SendIcon :width="24" />
                        </button>
                    </div>
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
}

form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2,
.form-group {
    /* width: calc(100%/2); */
}

h2 {
    font-size: 2.9rem;
    font-weight: 100;
    padding-right: 10rem;
    line-height: 3rem;
    color: #593122;
}

.arsenica {

    color: #593122;
    font-size: 2.8rem;
}

input {
    width: 100%;
    font-size: 1rem;
    /* max-width: 500px; */
    padding: 0.7rem;
    border-radius: .5rem;
    background-color: transparent;
    border: 1px solid #593122;
    margin: 0;
    outline: none;
    color: #593122;
}

input::placeholder {
    color: #9D8277;
}

/* input::selection {
    border: 2px solid #593122;
} */

.form-group {
    display: flex;
    gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

button {
    padding: .8rem;
    border-radius: 10px;
    border: none;
    background-color: #593122;
    cursor: pointer;
}

label {
    font-size: 1.3rem;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    gap: .5rem;
    color: #593122;
}
</style>