<template>
    <div class="container">
        <div class="filters">
            <div class="filter-title">
                <FilterIcon width="20" />Filtros
            </div>
            <ul v-if="types.length != 0">
                <li>Tipo:</li>
                <li v-for="elm in types" :key="elm">
                    <input type="checkbox" name="" :id="elm">
                    <label :for="elm">{{ elm }}</label>

                </li>
            </ul>
            <ul v-if="genders.length != 0">
                <li>Genero:</li>
                <li v-for="elm in genders" :key="elm">
                    <div class="inline-flex items-center gap-2">
                        <div class="relative flex cursor-pointer items-center rounded-full" 
                            data-ripple-dark="true">
                            <input type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:border-secondary checked:bg-secondary hover:before:bg-secondary hover:before:opacity-10"
                                :id="elm" checked />
                            <div
                                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                    fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <label :for="elm">{{elm}}</label>
                    </div>

                </li>
            </ul>
            <ul v-if="materials.length != 0">
                <li>Material:</li>
                <li v-for="elm in materials" :key="elm">
                    <input type="checkbox" name="" :id="elm">
                    <label :for="elm">{{ elm }}</label>

                </li>
            </ul>

        </div>
        <div class="product-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue';
import FilterIcon from '@/assets/icons/FilterIcon.vue';
import { computed, ref } from 'vue';

const typeRaw = ref(["pulsera", "cadenas", "aros", "reloj"])
const types = computed(() => {
    return typeRaw.value.map((type) => doUppercase(type))
})

const gendersRaw = ref(["hombre", "mujer", "unisex"])
const genders = computed(() => {
    return gendersRaw.value.map((type) => doUppercase(type))
})

const materialsRaw = ref(["acero quirurgico", "enchapado en oro", "bijouterie"])
const materials = computed(() => {
    return materialsRaw.value.map((type) => doUppercase(type))
})

const doUppercase = data => {
    return data[0].toUpperCase() + data.slice(1)
}

</script>
<style scoped>
.container {
    padding: 10rem 0 5rem;
    display: flex;
    user-select: none;
}

.filters {
    width: 20%;
    max-width: 400px;
}

.filter-title {
    display: flex;
    gap: .5rem;
    font-weight: 500;
    font-size: 1rem;
    align-items: center;
}

.product-container {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    gap: .5rem;
}

ul:first-of-type {
    margin-top: 2rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-bottom: 1px solid #53535383;
    padding-bottom: 1.5rem;
    margin-right: 2rem;
}

li:first-child {
    font-weight: 500;
    margin: .5rem 0;
}

li {
    display: flex;
    gap: .5rem;
}

h1 {
    width: 100%;
}
</style>