<template>
    <div class="container flex flex-col flex-wrap lg:flex-row !px-4 !py-16 md:!py-32">
        <h3 v-if="route.params.name" class="w-full pl-64 text-2xl capitalize py-2">{{ route.params.name }}</h3>
        <div class="filters w-1/5 hidden lg:block">
            <!-- <div class="filter-title">
                <FilterIcon :width="20" />Filtros
            </div> -->
            <!-- <ul v-if="types.length != 0" class="ul">
                <li>Tipo:</li>
                <CheckInput v-for="(elm, index) in types" :key="index" :elm="elm" />
            </ul>
            <ul v-if="genders.length != 0" class="ul">
                <li>Genero:</li>
                <CheckInput v-for="(elm, index) in genders" :key="index" :elm="elm" />
            </ul>
            <ul v-if="materials.length != 0" class="ul">
                <li>Material:</li>
                <CheckInput v-for="(elm, index) in materials" :key="index" :elm="elm" />
            </ul> -->

        </div>


        <div class="flex lg:hidden flex-wrap gap-y-4 py-4">
            <!-- <div class="w-full flex gap-2 font-semibold">
                <FilterIcon :width="20" class="lg:hidden" />Filtros
            </div>
            <FilterList :lista="types" title="Tipo" :listOpen="listStore.type" class="w-1/3 border p-2 bg-white" />
            <FilterList :lista="materials" title="Material" :listOpen="listStore.gender"
                class="w-1/3 border p-2 bg-white" />
            <FilterList :lista="genders" title="Género" :listOpen="listStore.materials"
                class="w-1/3 border p-2 bg-white" />
        </div> -->
            <div class="product-container w-full">
                <p v-if="products.length == 0">No hay productos</p>
                <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue';
import FilterIcon from '@/assets/icons/FilterIcon.vue';
import { computed, ref, onMounted } from 'vue';
import CheckInput from '@/components/listProduct/CheckInput.vue';
import { ClienteAxios } from '@/config/ClienteAxios';
import FilterList from '@/components/listProduct/FilterList.vue';
import { useListStore } from '@/stores/listStore';
import { useRoute } from 'vue-router';

const listStore = useListStore()

const products = ref([])
const route = useRoute()

onMounted(async () => {
    if (route.params?.name) {
        const response = await ClienteAxios.get(`/Categorias/${route.params?.name}`)
        if (response.status == 200) {
            console.log(response)
            products.value = response.data
        }
        return
    }

    const response = await ClienteAxios.get('/Productos/')
    if (response.status == 200) {
        products.value = response.data
    }
    return
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
    user-select: none;
}

.filters {
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
    flex-wrap: wrap;
    gap: .5rem;
    align-items: flex-start
}

.ul:first-of-type {
    margin-top: 2rem;
}

.ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-bottom: 1px solid #53535383;
    padding-bottom: 1.5rem;
    margin-right: 2rem;
}

.ul li:first-child {
    font-weight: 500;
    margin: .5rem 0;
}

.ul li {
    display: flex;
    gap: .5rem;
}

h1 {
    width: 100%;
}
</style>