<template>
    <div
        class="border rounded-md text-gray-600 border-gray-400/60 p-2 gap-2 sm:gap-4 flex flex-col sm:flex-row w-full mb-4 bg-stone-100">
        <!-- Imagen del producto -->
        <img src="@/assets/images/imageProduct.png" alt=""
            class="w-full sm:w-[10%] aspect-[14/16] object-cover rounded-md">

        <div class="w-full sm:w-5/12 relative">
            <h4 class="font-semibold text-base sm:text-lg">{{ product.producto_nombre }}</h4>
            <button class="text-sm absolute bottom-0 underline cursor-pointer">Eliminar</button>
        </div>
        <div class="flex justify-center items-start w-full sm:w-2/12 mt-2">
            <p
                class="bg-primary hover:bg-secondary transition w-8 h-8 text-white rounded-full flex items-center justify-center cursor-pointer">
                -
            </p>
            <p class="flex h-8 items-center px-4">2</p>
            <p
                class="bg-primary hover:bg-secondary transition w-8 h-8 text-white rounded-full flex items-center justify-center cursor-pointer">
                +
            </p>
        </div>
        <h5 class="font-semibold text-lg sm:text-xl w-full sm:w-3/12 text-center sm:text-right sm:px-4 mt-2">
            ${{ product.producto_precio }}
        </h5>
    </div>
</template>
<script setup>
defineProps({
    product: {
        type: Object,
        default: {
        }
    },
})

</script>
<style scoped></style>