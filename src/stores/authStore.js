import client from "@/config/client";
import { ClienteAxios } from "@/config/ClienteAxios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(obtenerUsuario());
  const token = ref(recuperarToken());

  async function obtenerUsuario() {
    try {
      const response = await ClienteAxios.get("Clientes/Datos");
      user.value = response.data.cliente 
    } catch (e) {
      user.value = null
    }
  }

  async function register(formData) {
    const res = await ClienteAxios.post('Clientes/Crear', formData);
    if(res.data.status === 'OK'){  
      await obtenerUsuario();
    } 
  }

  return { user, token, get_user, register };
});

function recuperarToken() {
  return localStorage.getItem("tokenAtemporal");
}
