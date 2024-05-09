<template>
    <svg :style="{
        fill: props.color,
        aspectRatio: '1/1',
        width: `${width}px`
    }" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z"
         />
    </svg>
</template>
<script setup>
const props = defineProps({
    color: {
        type: String,
        default: '#fbfbfb'
    },
    width: {
        type: String,
        default: '24'
    }
})
</script>
<style scoped></style>