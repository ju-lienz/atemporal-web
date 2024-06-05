<template>
    <div
        :class="`relative max-w-full flex items-center justify-center flex-col gap-4 ${props.twoRows ? 'max-h-[32rem] min-h-[32rem]' : 'max-h-64 min-h-64'}`">
        <img :class="` w-full absolute brightness-50 object-cover transition duration-500 hover:scale-105 hover:transform-origin-top-left`"
            :src="imageSrc" alt="Product image">
        <!-- <div class="absolute h-full inset-0 bg-black opacity-40"></div> -->
        <h2 class="text-white text-3xl font-light">{{ text }}</h2>
        <button @mouseenter="handleHover" @mouseleave="handleHover">Ver más
            <ArrowRightIcon :stroke="stroke" />
        </button>

    </div>
</template>

<script setup>
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon.vue';
import { defineProps, ref, watchEffect } from 'vue';

const stroke = ref("#fff")
const handleHover = () => {
    stroke.value = stroke.value != "#fff" ? "#fff" : "#593122";
}

const props = defineProps({
    image: String,
    text: String,
    twoRows: {
        type: Boolean,
        default: false
    }
})

const imageSrc = ref()
watchEffect(async () => {
    imageSrc.value = (await import(/* @vite-ignore */ `../../assets/images/${props.image}`)).default
})

</script>

<style scoped>
button {
    top: 10%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    /* background-color: #fff; */
    padding: .5rem 1rem;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

button:hover {
    background-color: #ffffff;
    color: #593122;
}
</style>