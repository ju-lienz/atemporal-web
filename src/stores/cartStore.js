import Swal from 'sweetalert2'
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ClienteAxios } from "@/config/ClienteAxios";

export const useCartStore = defineStore("cart", () => {
  
  const cart = ref(JSON.parse(localStorage.getItem("cart")) ?? []);
  const quantityOfProducts = computed(() => cart.value.reduce((quantity, product) => product.cantidad + quantity, 0))
  const subtotal = computed(() => cart.value.reduce((amount, product) => product.cantidad * product.producto_precio + amount, 0))

  function addProduct(productToAdd) {
    const indexProductInCart = cart.value.findIndex(
      (product) => productToAdd.id == product.id
    );
    if (indexProductInCart != -1) {
      cart.value[indexProductInCart].cantidad++;
      console.log(productToAdd);
      Swal.fire({
        title: "Cantidad actualizada",
        text: `Has agregado una unidad más de ${productToAdd.producto_nombre}.`,
        icon: "success"
      });
    } else {
      cart.value.push({ ...productToAdd, cantidad: 1 });
      console.log(productToAdd);
      Swal.fire({
        title: "Producto agregado",
        text: `El producto ${productToAdd.producto_nombre} fue agregado correctamente a tu carrito.`,
        icon: "success"
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function substractProduct(productToSubstract) {
    const indexProductInCart = cart.value.findIndex(
      (product) => productToSubstract.id == product.id
    );
    if (indexProductInCart != -1) {
      cart.value[indexProductInCart].cantidad--;
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function deleteProduct(productToDelete) {
    cart.value = cart.value.filter(product => product.id != productToDelete.id)
    
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  async function sendProducts(){
    try {
      const response = await ClienteAxios.post('Clientes/Carrito', {productos: cart.value});
      console.log(response);
  
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "success"
      }).then(result => {
        localStorage.setItem("cart", JSON.stringify([]));
        window.location.href = response.data;
      });

    } catch (error) {
      console.log(error);
    }
  }

  return {
    cart,
    quantityOfProducts,
    subtotal,
    addProduct,
    substractProduct,
    deleteProduct,
    sendProducts,
  };
});
