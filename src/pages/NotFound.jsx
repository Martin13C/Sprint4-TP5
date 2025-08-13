import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaGhost } from 'react-icons/fa';


export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard')
    }, 5000)

    // cleanup para evitar memory leaks si el componente se desmonta antes
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 text-white text-center font-inter bg-gray-900'>
      <div className="flex flex-col items-center p-10 rounded-3xl shadow-2xl animate-fade-in-up">
      
        <h1 className='text-6xl font-bold text-red-500 mb-4 drop-shadow-lg'>404</h1>
        <h2 className='text-3xl font-black text-gray-300 mb-8 '>Página no encontrada</h2>
        <p className='text-lg text-gray-400'>
          Serás redirigido al dashboard en segundos...
        </p>
      </div>
    </div>
  )
}

export default NotFound

