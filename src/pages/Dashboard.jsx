import { useNavigate } from 'react-router';
import { usePerfiles } from '../context/PerfilesContext';
import { ClipLoader } from "react-spinners";
import { FaUserPlus } from 'react-icons/fa';
import ListPerfiles from '../components/ListPerfiles'

export function Dashboard() {
  const navigate = useNavigate();
  const { loading } = usePerfiles();

  return (

    <div className='p-6 sm:p-10 flex-1 bg-gray-800 text-white min-h-screen font-inter'>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg mb-4 md:mb-0'>
          Dashboard
        </h1> */}
        <button
          onClick={() => navigate('/perfil/agregar')}
          className='flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1'
        >
          <FaUserPlus />
          <span>Agregar Perfil</span>
        </button>
      </div>

      {/* Contenedor principal del contenido del Dashboard */}
      {loading ? (
        // Muestra el spinner de carga si 'loading' es true
        <div className="flex justify-center items-center h-96">
          <ClipLoader
            size={150}
            color={"#3b82f6"} // Color del spinner, usa un color de Tailwind
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <ListPerfiles />
        </div>
        
      )}
    </div>
  )
}

export default Dashboard