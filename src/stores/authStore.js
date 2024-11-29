import Swal from "sweetalert2";
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
    const res = await ClienteAxios.post("Clientes/Crear", formData);
    if (res.data.status === "OK") {
      Swal.fire({
        title: "Cuenta registrada",
        text: "Tu cuenta ha sido registrada correctamente",
        icon: "success",
      });
      await obtenerUsuario();
    }
  }

  async function login(formData) {
    const res = await ClienteAxios.post("Clientes/Login", formData);
    console.log(res.response)
    if (res.response.data.status == 200) {
      Swal.fire({
        title: "Inicio exitoso",
        icon: "success",
      });
      await obtenerUsuario();
      return;
    }
    Swal.fire({
      title: "Ingreso erróneo",
      icon: "error",
    });
  }

  async function logout() {
    try {
      const response = await ClienteAxios.post("Clientes/Logout");
      user.value = null;
      localStorage.removeItem("user");
      Swal.fire({
        title: "Sesión cerrada",
        text: "Has cerrado la sesión correctamente",
        icon: "success",
      });
    } catch (e) {
      console.log(e);
    }
  }

  return { user, token, obtenerUsuario, register, login, logout };
});

function recuperarToken() {
  return localStorage.getItem("tokenAtemporal");
}
