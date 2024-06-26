<template>
    <div class="container !py-20 flex-wrap">
        <div class="image-container w-full md:w-1/2">
            <img src="@/assets/images/imageProduct.png" alt="" class="primary-image">
            <img src="@/assets/images/imageProduct.png" alt="" class="secondary-image">
            <img src="@/assets/images/imageProduct.png" alt="" class="tertiary-image">
        </div>
        <div class="text-container pt-4 md:pl-10 w-full md:w-1/2 md:max-w-lg">
            <h1 class="arsenica text-2xl">{{ product.producto_nombre }}</h1>
            <p class="detail">{{ product.producto_descripcion }}
            </p>
            <h3 class="price">${{ product.producto_precio }}</h3>
            <!-- <h5 class="fees">3 cuotas sin interés de $3216,3</h5> -->
            <h6 class="payment">Ver formas de pago</h6>
            <button>
                <ShoppingCartIcon /> Añadir al carrito
            </button>
            <p class="cost-shipping">Costo de envío:</p>
            <input type="text">
            <a href="">
                <h6 class="postal-code">No sé mi código postal</h6>
            </a>
        </div>
    </div>

</template>

<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue';
import { ClienteAxios } from '@/config/ClienteAxios';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();

const product = ref({})

onBeforeMount(async () => {

    const id = route.params.id;
    const response = await ClienteAxios.get(`/Productos/${id}`);
    console.log(response);
    if (response.status == 200) {
        product.value = response.data
    }
});

</script>

<style scoped>
.container {
    display: flex;
}

.image-container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 5px 5px;
    grid-template-areas:
        "secondary-image primary-image primary-image"
        "tertiary-image primary-image primary-image"
        ". primary-image primary-image"
        ". primary-image primary-image"
        ". primary-image primary-image";
}

.primary-image {
    grid-area: primary-image;
    width: 100%;
}

.secondary-image {
    grid-area: secondary-image;
    width: 100%;
}

.tertiary-image {
    grid-area: tertiary-image;
    width: 100%;
}



.payment {
    font-size: 1rem;
    text-decoration: underline;
    font-family: 1.5rem;
    color: #423F3E;
    padding-bottom: 2rem;
}

h1 {
    font-weight: 600;
    color: #423F3E;
}

.detail {
    font-weight: 400;
    color: #423F3E;
}

h6 {
    text-decoration: underline;
    color: #423F3E;
    padding-bottom: 2rem
}

.price {
    padding: 1.5rem 0rem 1.5rem 0rem;
    font-weight: 600;
    color: #423F3E;
}

.fees {
    margin-bottom: 0.4rem;
    color: #423F3E;
}

input {
    height: 3rem;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: transparent;
    border: 1px solid #593122;
    margin: 0;
    outline: none;
}

button {
    width: 100%;
    padding: 0.5rem;
    background-color: #6e3c2a;
    color: #FBFBFB;
    border: none;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    gap: .5rem;
    cursor: pointer;
}

.cost-shipping {
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
}

.postal-code {
    color: #847E7A;
    font-size: 0.9rem;
    margin-top: 0.6rem;
}
</style>