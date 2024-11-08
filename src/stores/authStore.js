import client from "@/config/client";
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

  return { user, token, get_user };
});

function recuperarToken() {
  return localStorage.getItem("tokenAtemporal");
}
