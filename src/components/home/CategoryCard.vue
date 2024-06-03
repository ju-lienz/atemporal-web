<template>
    <div class="container overflow-hidden">
        <div
            class="relative w-full mx-auto h-64 transition duration-500 hover:scale-105 hover:transform-origin-top-left">
            <img class="h-64 w-full object-cover" :src="imageSrc" alt="Random image">
            <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <h2 class="text-white text-3xl font-light">{{ text }}</h2>
            </div>
        </div>
    </div>
</template>


<script setup>
import { defineProps, ref, watchEffect } from 'vue';

const props = defineProps({
    image: String,
    text: String
})


const imageSrc = ref()
watchEffect(async () => {
    imageSrc.value = (await import(/* @vite-ignore */ `../../assets/images/${props.image}`)).default
})

</script>

<style scoped></style>