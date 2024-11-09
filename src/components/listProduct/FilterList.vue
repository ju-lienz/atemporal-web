@ -0,0 +1,29 @@
<template>
    <div class="">
        <p @click="isOpenList = !isOpenList">{{ title }}</p>
        <ul class="absolute left-0 top-full z-30 bg-white border w-52 transition-all origin-top" :class="{
            'scale-y-100': isOpenList,
            'scale-y-0': !isOpenList
        }">
            <CheckInput v-for="(elm, index) in lista" :key="index" :elm="elm" class="p-2" />
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CheckInput from './CheckInput.vue';

const isOpenList = ref(false)

defineProps({
    lista: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>
<style scoped></style>