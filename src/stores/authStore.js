import client from "@/config/client";
import { ClienteAxios } from "@/config/ClienteAxios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);
  const token = ref(recuperarToken());

  obtenerUsuario();

  async function obtenerUsuario() {
    try {
      const response = await ClienteAxios.get("Clientes/Datos");
      user.value = response.data.cliente;
      localStorage.setItem("user", JSON.stringify(user.value));
    } catch (e) {
      user.value = null;
      localStorage.removeItem("user");
    }
  }

  async function register(formData) {
    const res = await ClienteAxios.post('Clientes/Crear', formData);
    console.log(res)
    if(res.data.status === 'OK'){  
      await obtenerUsuario();
    } 
  }

  async function logout(){
    try{
      const response = await ClienteAxios.post("Clientes/Logout");
      user.value = null;
      localStorage.removeItem("user");
    }catch(e){
      console.log(e);
    }
   
  }

  return { user, token, obtenerUsuario, register, logout};
});

function recuperarToken() {
  return localStorage.getItem("tokenAtemporal");
}

