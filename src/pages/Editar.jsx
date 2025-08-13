import { useNavigate, useParams } from "react-router";
import { usePerfiles } from "../context/PerfilesContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaYup } from "../validations/SchemaYup";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";

export function Editar() {

  const { id } = useParams();
  const { putApi, setLoading, perfiles, loading } = usePerfiles();
  const navigate = useNavigate();
  const perfil = perfiles.find((perfil) => perfil.id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({resolver: yupResolver(schemaYup)});

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await putApi(id, data);
      navigate(`/dashboard`);
    } catch (error) {
      setError("apiError", { message: "Error al editar el perfil" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (hasError) =>
    `w-full px-4 py-2 rounded-md bg-gray-700 text-white border ${
      hasError ? "border-red-400" : "border-transparent"
    } focus:outline-none focus:ring-2 ${
      hasError ? "focus:ring-red-400" : "focus:ring-green-400"
    } transition`;


    useEffect(() => {
  if (perfil) {
    reset({
      nombre: perfil.nombre || "",
      edad: perfil.edad || "",
      sexo: perfil.sexo || "", // <-- aquí cargas el sexo actual
      email: perfil.email || "",
      imagen: perfil.imagen || "",
    });
  }
}, [perfil, reset]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-green-400 text-center mb-6">Editar Perfil</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre */}
          <div>
            <input
              type="text"
              {...register("nombre")}
              className={inputStyle(errors.nombre)}
            />
            {errors.nombre && (
              <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>
            )}
          </div>

          {/* Edad */}
          <div>
            <input
              type="number"
              min="1"
              max="120"
              {...register("edad")}
              className={inputStyle(errors.edad)}
            />
            {errors.edad && (
              <p className="text-red-400 text-sm mt-1">{errors.edad.message}</p>
            )}
          </div>

          {/* Sexo */}
          <div>
            <select {...register("sexo")} className={inputStyle(errors.sexo)} >
              <option value="" disabled hidden></option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.sexo && (
              <p className="text-red-400 text-sm mt-1">{errors.sexo.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email *"
              {...register("email")}
              className={inputStyle(errors.email)}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Imagen */}
          <div>
            <input
              type="text"
              placeholder="URL de Imagen (opcional)"
              {...register("imagen")}
              className={inputStyle(errors.imagen)}
            />
            {errors.imagen && (
              <p className="text-red-400 text-sm mt-1">{errors.imagen.message}</p>
            )}
          </div>

          {/* Error API */}
          {errors.apiError && (
            <p className="text-red-400 font-semibold text-center">{errors.apiError.message}</p>
          )}

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg transition ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-600"
            }`}
          >
            {loading && <ClipLoader size={20} color="#1f2937" />}
            {loading ? "Guardando..." : "Guardar Cambios"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editar;