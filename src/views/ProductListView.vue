<template>
    <div class="container">
        <div class="filters">
            <div class="filter-title">
                <FilterIcon width="20" />Filtros
            </div>
            <ul v-if="types.length != 0">
                <li>Tipo:</li>
                <CheckInput v-for="(elm, index) in types" :key="index" :elm="elm" />
            </ul>
            <ul v-if="genders.length != 0">
                <li>Genero:</li>
                <CheckInput v-for="(elm, index) in genders" :key="index" :elm="elm" />
            </ul>
            <ul v-if="materials.length != 0">
                <li>Material:</li>
                <CheckInput v-for="(elm, index) in materials" :key="index" :elm="elm" />
            </ul>

        </div>
        <div class="product-container">
            <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
        </div>
    </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue';
import FilterIcon from '@/assets/icons/FilterIcon.vue';
import { computed, ref, onMounted } from 'vue';
import CheckInput from '@/components/listProduct/CheckInput.vue';
import { ClienteAxios } from '@/config/ClienteAxios';

const products = ref([])

onMounted(async () => {
    const response = await ClienteAxios.get('/Productos/')
    if (response.status == 200) {
        products.value = response.data
    }
})


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
    align-items: flex-start
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