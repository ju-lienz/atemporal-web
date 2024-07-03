<template>
    <div class="card-container !max-w-full !px-0 md:!px-4 border-t md:border-l md:border-y-0 border-t-primary/30 first-of-type:border-t-0 first-of-type:border-l-0  md:border-l-primary/30">
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
    display: flex;
    padding: 1rem;
    gap: 1rem;
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