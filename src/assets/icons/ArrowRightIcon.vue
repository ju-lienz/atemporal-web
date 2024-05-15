<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.5 12H20.33"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

</template>
<script setup>
const props = defineProps({
    stroke: {
        type: String,
        default: "#593122"
    }
})
</script>
<style scoped>
svg {
    aspect-ratio: 1/1;
    stroke: v-bind(stroke);
    fill: transparent;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>