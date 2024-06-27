<template>
    <img src="@/assets/images/imagen3.jpg" class="w-full h-screen brightness-50 absolute object-cover top-0 z-0">
    <div class="container ">
        <div class="text-principal">
            <h2 class="arsenica text-2xl lg:text-5xl w-full text-center" :style="{
                color: '#F2D49B'
            }">Expresa tu personalidad con</h2>

            <StarIcon color="#fbfbfb" />
            <h3 class="atemporal !text-5xl lg:text-8xl">Atemporal</h3>


            <StarIcon color="#fbfbfb" />
            <p class="px-4 text-center lg:px-0 lg:text-left">Queremos acercarte una exclusiva línea de accesorios seleccionados para ser tu
                complemento ideal en el
                día a día o en ocasiones especiales. Nuestra misión es que cada accesorios que elijas sea el reflejo de
                tu personalidad y estilo</p>
            <div class="scroll">
                Descubre más
                <ArrowDownIcon />
            </div>
        </div>
    </div>
</template>
<script setup>
import ArrowDownIcon from '@/assets/icons/ArrowDownIcon.vue';
import StarIcon from '@/assets/icons/StarIcon.vue';


</script>
<style scoped>
/* .container-text {
    z-index: 100;
    display: flex;
    min-height: 100vh;
    align-items: center;
    padding-left: 13.5rem;
} */

.text-principal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    gap: .5rem;
    max-width: 730px;
    height: 100vh;
}

p {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: normal;
    color: #fbfbfb;
    font-size: clamp(14px, 1vw, 20px);
    line-height: 1.5rem;
    padding-right: 1rem;
    padding-top: 1rem;
}


.scroll {
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    font-size: 1.2rem;
    color: #fbfbfb;
    font-weight: 100;
}
</style>