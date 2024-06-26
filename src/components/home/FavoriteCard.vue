<template>
    <div class="card-container">
        <div class="product-desc">
            <h3>Anillo Louise</h3>
            <p>Anillo enchapado en oro 18k hipoalergénico</p>
        </div>
        <img src="@/assets/images/favorite-image.png">
    </div>
</template>
<script setup>

</script>
<style scoped>
.card-container {
    max-width: 33%;
    display: flex;
    padding: 1rem;
    gap: 1rem;
    border-left: 1px solid #55555546;
}

h3 {
    font-family: 'Arsenica Trial';
    width: 100%;
    font-size: clamp(16px, 1.5rem, 50px);
    font-weight: 500;
    color: #162623;
    margin-bottom: .3rem;
}

p {
    font-weight: 100;
    font-size: .9rem;
}

img {
    aspect-ratio: 3/4;
    width: 30%;
    object-fit: cover;
}
</style>