import client from "@/config/client";
import { ClienteAxios } from "@/config/ClienteAxios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(recuperarToken());

  async function get_user() {
    try {
      const res = await client("Clientes/Datos", "GET");
      if (res.data.status === "OK") {
        user.value = res.data.cliente;
      }
    } catch (e) {
      console.log("ocurrio un error", e);
    }
  }

  async function register(formData) {
    const res = await ClienteAxios.post('Clientes/Crear', formData);
    console.log(res)
    if(res.data.status === 'OK'){  
      const response = await ClienteAxios.get("Clientes/Datos");
      console.log(response)
      user.value = response.data.cliente 
    } 
  }

  return { user, token, get_user, register };
});

function recuperarToken() {
  return localStorage.getItem("tokenAtemporal");
}
