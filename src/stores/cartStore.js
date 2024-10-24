import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('cart', () => {
    const count = ref(20)
    const cart = ref(JSON.parse(localStorage.getItem('cart')) ?? [])
    function loadCart(){
      cart.value = JSON.parse(localStorage.getItem('cart')) ?? [];
    }

    const doubleCount = computed(() => count.value * 2)
    function addProduct(productToAdd) {
      const indexProductInCart = cart.value.findIndex(product => productToAdd.id == product.id)
      if (indexProductInCart != -1) {
        cart.value[indexProductInCart].cantidad++
      } else {
        cart.value.push({...productToAdd, cantidad: 1})
      }
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    function substractProduct(productToSubstract) {
      const indexProductInCart = cart.value.findIndex(product => productToAdd.id == product.id)
      if (indexProductInCart != -1) {
        cart.value[indexProductInCart].cantidad--
      }
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }

  
    return { count, doubleCount, addProduct, loadCart, cart}
  })
  