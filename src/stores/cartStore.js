import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('cart', () => {
    const count = ref(20)
    const listProduct = ref([])
    const doubleCount = computed(() => count.value * 2)
    function addProduct(product) {
      count.value++
      console.log("asdasdas")
      console.log("Se ha añadido el producto", product)
      listProduct.value.push(product)
      console.log(listProduct.value)
    }
  
    return { count, doubleCount, addProduct, listProduct}
  })
  