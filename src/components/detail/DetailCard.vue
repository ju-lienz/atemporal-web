<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/images/imageProduct.png" alt="" class="primary-image">
            <img src="@/assets/images/imageProduct.png" alt="" class="secondary-image">
            <img src="@/assets/images/imageProduct.png" alt="" class="tertiary-image">
        </div>
        <div class="text-container">
            <h1 class="arsenica">Anillo Calabria Golden</h1>
            <p>Aros de plata inflada con baño de oro 18k. El tamaño es de 28mm y su peso es ligero. No produce alergia.
            </p>
            <h3>$9650</h3>
            <h5>3 cuotas sin interés de $3216,3</h5>
            <h6>Ver formas de pago</h6>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
.container {
    padding-top: 11rem;
    display: flex;
    padding-bottom: 11rem ;
}

.image-container {
    width: 50%;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 5px 5px;
    grid-template-areas:
        "secondary-image primary-image primary-image"
        "tertiary-image primary-image primary-image"
        "tertiary-image primary-image primary-image"
        "tertiary-image primary-image primary-image"
        "tertiary-image primary-image primary-image";
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

.text-container {
    padding-left: 2rem;
}

h1 {
    font-weight: 600;
}

p {
    font-weight: 400;
}

h6 {
    text-decoration: underline;
}
</style>