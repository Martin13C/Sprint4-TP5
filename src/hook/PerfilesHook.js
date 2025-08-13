import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  addPerfil,
  editPerfil,
  eliminarPerfil,
  getPerfiles,
} from "../service/ConsumoBack";

export const PerfilesJ = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // para avitar dobles render por el strictmode
  const isMounted = useRef(false);

  // Funcion para recolectar todos los perfiles
  const getApi = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPerfiles();
      setPerfiles(data);
    } catch (err) {
      setError(err.message || "Error al obtener perfiles");
      toast.error("Error al obtener perfiles.");
    } finally {
      setLoading(false);
    }
  }, []);

  //Funcion para agregar nuevo perfil
  const postApi = async (perfil) => {
    setLoading(true);
    setError(null);
    try {
      const nuevoPerfil = await addPerfil(perfil);
      setPerfiles((prev) => [...prev, nuevoPerfil]);
      return nuevoPerfil;
    } catch (err) {
      setError(err.message || "Error al crear perfil");
    } finally {
      setLoading(false);
    }
  };

  //   Funcion para editar un perfil
  const putApi = async (id, perfil) => {
    setLoading(true);
    setError(null);
    try {
      const perfilEditado = await editPerfil(id, perfil);
      setPerfiles((prev) => prev.map((p) => (p.id === id ? perfilEditado : p)));
      return perfilEditado;
    } catch (err) {
      setError(err.message || "Error al editar perfil");
    } finally {
      setLoading(false);
    }
  };

  // Funcion para eliminar un perfil
  const deleteApi = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await eliminarPerfil(id);
      setPerfiles((prev) => prev.filter((perfil) => perfil.id !== id));
    } catch (err) {
      setError(err.message || "Error al eliminar perfil");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      getApi();
    }
  }, [getApi]);

  return {
    getApi,
    postApi,
    putApi,
    deleteApi,
    perfiles,
    loading,
    setLoading,
    error,
    setError
  };
};
