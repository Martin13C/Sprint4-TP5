import axios from "axios";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_URL;

// funcion para obtener los perfiles
export const getPerfiles = async () => {
  const url = `${API_BASE}`;
  try {
    const { data } = await axios.get(url);
    toast.success("Perfiles Obtenidos Exitosamente!");
    return data;
  } catch (error) {
    const status = error.response.status;
    switch (status) {
      case 400: // Bad Request
        toast.warn(`⚠️ Error de datos`);
        break;
      case 401: // Unauthorized
        toast.error("🚫 No tienes autorización para realizar esta acción.");
        break;
      case 404: // Not Found
        toast.error("🔍 El recurso solicitado no se encontró.");
        break;
      case 500: // Internal Server Error
        toast.error(
          "💥 Error interno del servidor. Por favor, intenta más tarde."
        );
        break;
      default:
        toast.error(`❌ Error inesperado`);
    }
    throw error;
  }
};

// Funcion para agregar perfil nuevo
export const addPerfil = async (perfil) => {
  const url = `${API_BASE}/new`;
  try {
    const { data } = await axios.post(url, perfil);
    toast.success("Perfil Agregado Exitosamente!");
    return data;
  } catch (error) {
    const status = error.response.status;
    switch (status) {
      case 400: // Bad Request
        toast.warn(`⚠️ Error de datos`);
        break;
      case 404: // Not Found
        toast.error("🔍 El recurso solicitado no se encontró.");
        break;
      case 500: // Internal Server Error
        toast.error(
          "💥 Error interno del servidor. Por favor, intenta más tarde."
        );
        break;
      default:
        toast.error(`❌ Error inesperado`);
    }
    throw error;
  }
};

// funcion para editar nuevo perfil
export const editPerfil = async (id, perfilEditado) => {
  const url = `${API_BASE}/${id}`;
  try {
    const { data } = await axios.put(url, perfilEditado);
    toast.success("Perfiles Editado Exitosamente!");
    return data;
  } catch (error) {
    const status = error.response.status;
    switch (status) {
      case 400: // Bad Request
        toast.warn(`⚠️ Error de datos`);
        break;
      case 404: // Not Found
        toast.error("🔍 El Perfil no se encontró.");
        break;
      case 500: // Internal Server Error
        toast.error(
          "💥 Error interno del servidor. Por favor, intenta más tarde."
        );
        break;
      default:
        toast.error(`❌ Error inesperado`);
    }
    throw error;
  }
};

// funcion para eliminar
export const eliminarPerfil = async (id) => {
  const url = `${API_BASE}/${id}`;
  try {
    const { data } = await axios.delete(url);
    toast.success("Perfiles Eliminado Exitosamente!");
    return data;
  } catch (error) {
    const status = error.response.status;
    switch (status) {
      case 404: // Not Found (el perfil a eliminar no existe)
        toast.error("🔍 El perfil que intentas eliminar no existe.");
        break;
      case 500: // Internal Server Error
        toast.error("💥 Error interno del servidor. Intenta más tarde.");
        break;
      default:
        toast.error(`❌ Error inesperado`);
        break;
    }
    throw error;
  }
};
