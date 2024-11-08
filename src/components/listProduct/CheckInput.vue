@ -0,0 +1,31 @@
<template>
    <li>
        <div class="inline-flex items-center gap-2">
            <div class="relative flex cursor-pointer items-center rounded-full" data-ripple-dark="true">
                <input type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  checked:bg-secondary"
                    :id="elm" />
                <div
                    class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <label :for="elm" class="cursor-pointer">{{ elm }}</label>
        </div>
    </li>
</template>
<script setup>
const props = defineProps({
    elm: {
        type: String,
        default: 'Texto de prueba'
    }
})

</script>
<style scoped></style>