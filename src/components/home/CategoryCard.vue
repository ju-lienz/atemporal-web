<template>
    <div @mouseenter="handleHover" @mouseleave="handleHover"
        :class="`relative max-w-full flex items-center group cursor-pointer justify-center flex-col gap-4 max-h-[16rem] min-h-[16rem]  ${props.twoRows ? 'md:max-h-[24rem] md:min-h-[24rem]' : 'md:max-h-48 md:min-h-48'}`">
        <img :class="` w-full h-full absolute brightness-50 object-cover transition duration-500 group-hover:scale-105`"
            :src="image" alt="Product image">
        <h2 class="text-white text-3xl font-light">{{ text }}</h2>
        <button class="group-hover:bg-white group-hover:text-primary">Ver más
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



</script>

<style scoped>
button {
    top: 10%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: .5rem 1rem;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>