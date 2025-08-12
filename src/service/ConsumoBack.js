import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

// funcion para obtener los perfiles
export const getPerfiles = async () => {
  const url = `${API_BASE}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Error al obtener perfiles:", error);
    throw error;
  }
};

// Funcion para agregar perfil nuevo
export const addPerfil = async (perfil) => {
  const url = `${API_BASE}/new`;
  try {
    const { data } = await axios.post(url, perfil);
    return data;
  } catch (error) {
    console.error("Error al colocar nuevo perfil:", error);
    throw error;
  }
};

// funcion para editar nuevo perfil
export const editPerfil = async (id, perfilEditado) => {
  const url = `${API_BASE}/${id}`;
  try {
    const { data } = await axios.put(url, perfilEditado);
    return data;
  } catch (error) {
    console.error("Error al editar perfil:", error);
    throw error;
  }
};

// funcion para eliminar
export const eliminarPerfil = async (id) => {
  const url = `${API_BASE}/${id}`;
  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (error) {
    console.error("Error al eliminar perfil:", error);
    throw error;
  }
};
