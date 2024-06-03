<template>
    <div class="border rounded-md text-gray-600 border-gray-700/60 p-2 gap-4 flex w-full mb-4">
        <img src="@/assets/images/imageProduct.png" alt="" class="w-[10%] aspect-[14/16] object-cover rounded-md">
        <div class="w-5/12 ">
            <h4 class=" font-semibold">Titulo producto</h4>
            <p class="text-sm">Descripcion del producto ekisde</p>
            <button 
                class="text-sm absolute bottom-0 underline cursor-pointer" 
            >Eliminar</button>
        </div>
        <div class="flex items-start w-2/12 mt-2">
            <p class="bg-primary aspect-square w-8 text-white rounded-full flex items-center justify-center cursor-pointer">-</p>
            <p class="flex h-8 items-center px-4">2</p>
            <p class="bg-primary aspect-square w-8 text-white rounded-full flex items-center justify-center cursor-pointer">+</p>
        </div>
        <h5 class="font-semibold text-xl w-3/12 px-4 text-right mt-2">$312.12</h5>
    </div>
</template>
<script setup>
</script>
<style scoped>
    
</style>