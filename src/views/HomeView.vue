<script setup>
import FavoriteSection from '@/components/home/FavoriteSection.vue';
import PrincipalImage from '@/components/home/PrincipalImage.vue'
import ProductsSection from '@/components/home/ProductsSection.vue';
import NewsletterSection from '@/components/home/NewsletterSection.vue';
import ProductCategories from '@/components/home/ProductCategories.vue';

console.log(document.cookie)
</script>

<template>
  <PrincipalImage />
  <FavoriteSection />


  <ProductCategories />
  <ProductsSection />
  <NewsletterSection />
</template>

<style scoped></style>
