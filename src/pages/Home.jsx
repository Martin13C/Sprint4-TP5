import { useNavigate } from 'react-router'


export function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white font-inter p-4 sm:p-8">
      {/* Contenedor principal para centrar el contenido y aplicar el degradado */}
      <div className="text-center bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full mx-auto">
        
        {/* Título principal con estilo moderno */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-lg">
          Bienvenido a la Gestión de Perfiles
        </h1>
        
        {/* Subtítulo o descripción */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
          Explora, agrega, edita y elimina perfiles de forma sencilla y eficiente.
        </p>

        {/* Contenedor para los botones */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-center">

          {/* Botón de ejemplo para navegar a un perfil por ID (usando navigate) */}
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full md:w-auto px-8 py-3 rounded-full text-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Lista de Perfiles
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home