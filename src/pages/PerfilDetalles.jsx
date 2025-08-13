// import { useNavigate, useParams } from 'react-router';
// import { usePerfiles } from '../context/PerfilesContext';
// import Swal from 'sweetalert2';

// export function PerfilDetalles() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { perfiles, deleteApi } = usePerfiles();

//   // Busca el perfil por id
//   const perfil = perfiles.find((p) => p.id === id);

//   // Si no encontró el perfil, muestra mensaje
//   if (!perfil) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
//         <h1 className="text-2xl font-semibold mb-4">Perfil no encontrado</h1>
//         <button
//           onClick={() => navigate('/dashboard')}
//           className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
//         >
//           Volver al Dashboard
//         </button>
//       </div>
//     );
//   }

//   // Función para eliminar el perfil con confirmación
//   const handleDelete = async () => {
//     const result = await Swal.fire({
//       title: '¿Eliminar este perfil?',
//       text: '¿Estás seguro de eliminar este perfil de forma permanente?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#e3342f',
//       cancelButtonColor: '#6b7280',
//       confirmButtonText: 'Sí, eliminar',
//       cancelButtonText: 'Cancelar',
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteApi(perfil.id);
//         // Navega al dashboard después de eliminar
//         navigate('/dashboard');
//       } catch (error) {
//         console.error('Error al eliminar perfil:', error);
//         Swal.fire('Error', 'No se pudo eliminar el perfil.', 'error');
//       }
//     }
//   };


//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
//       <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-6">{perfil.nombre}</h1>

//         {perfil.imagen && (
//           <img
//             src={perfil.imagen}
//             alt={perfil.nombre}
//             className="w-full h-64 object-cover rounded-md mb-6 shadow-md"
//             onError={(e) => { e.target.src = '/default-image.png'; }} // imagen por defecto si falla la carga
//           />
//         )}

//         <div className="mb-4">
//           <strong>Email:</strong> {perfil.email || 'No especificado'}
//         </div>

//         <div className="mb-4">
//           <strong>Edad:</strong> {perfil.edad || 'No especificada'}
//         </div>

//         <div className="mb-6">
//           <strong>Sexo:</strong> {perfil.sexo || 'No especificado'}
//         </div>

//         <div className="flex justify-between gap-4">
//           <button
//             onClick={() => navigate(`/perfil/${perfil.id}/editar`)}
//             className="flex-1 bg-green-600 hover:bg-green-700 text-gray-900 font-semibold py-2 rounded transition"
//           >
//             Editar
//           </button>

//           <button
//             onClick={handleDelete}
//             className="flex-1 bg-red-600 hover:bg-red-700 text-gray-900 font-semibold py-2 rounded transition"
//           >
//             Eliminar
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PerfilDetalles


import { useNavigate, useParams } from 'react-router';
import { usePerfiles } from '../context/PerfilesContext';
import Swal from 'sweetalert2';

export function PerfilDetalles() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { perfiles, deleteApi } = usePerfiles();

  const perfil = perfiles.find((p) => p.id === id);

  if (!perfil) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-6">
        <h1 className="text-2xl font-semibold mb-4">Perfil no encontrado</h1>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          Volver al Dashboard
        </button>
      </div>
    );
  }

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Eliminar este perfil?',
      text: '¿Estás seguro de eliminar este perfil de forma permanente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444', // rojo Tailwind
      cancelButtonColor: '#6b7280', // gris Tailwind
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await deleteApi(perfil.id);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error al eliminar perfil:', error);
        Swal.fire('Error', 'No se pudo eliminar el perfil.', 'error');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex justify-center items-center">
      <div className="max-w-6xl w-200 bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col md:flex-row md:gap-10">
        
        {/* Imagen perfil */}
        <div className="md:w-1/3 mb-6 md:mb-0 rounded-lg overflow-hidden shadow-inner">
          <img
            src={perfil.imagen}
            alt={perfil.nombre}
            className="w-full h-auto object-contain max-h-96 rounded-lg"
          />
        </div>

        {/* Detalles y botones */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">{perfil.nombre}</h1>

            <div className="space-y-3 text-lg">
              <p>
                <span className="font-semibold text-yellow-400">Email:</span> {perfil.email || 'No especificado'}
              </p>
              <p>
                <span className="font-semibold text-yellow-400">Edad:</span> {perfil.edad !== undefined ? perfil.edad : 'No especificada'}
              </p>
              <p>
                <span className="font-semibold text-yellow-400">Sexo:</span> {perfil.sexo || 'No especificado'}
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-6 flex-col sm:flex-row justify-start">
            <button
              onClick={() => navigate(`/perfil/${perfil.id}/editar`)}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Editar
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilDetalles;
