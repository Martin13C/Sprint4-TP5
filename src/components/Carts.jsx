import { useNavigate } from 'react-router'

export function Carts({ perfil }) {
  const navigate = useNavigate()
  return (
    <div
      className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={() => navigate(`/perfil/${perfil.id}`)}
    >
      {perfil.imagen && (
        <img
          src={perfil.imagen}
          alt={perfil.nombre}
          className="w-full h-56 md:h-48 lg:h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
      )}
      {/* Overlay con el nombre para un efecto más limpio */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 rounded-3xl">
        <p className="text-lg font-semibold text-white drop-shadow-md">{perfil.nombre}</p>
      </div>
    </div>
  )
}

export default Carts