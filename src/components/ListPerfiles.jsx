import { usePerfiles } from '../context/PerfilesContext';
import Carts from './Carts'

export function ListPerfiles() {
  const { perfiles } = usePerfiles();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 sm:px-6 md:px-8">
      {perfiles.map((perfil) => (
        <Carts key={perfil.id} perfil={perfil} />
      ))}
    </div>
  )
}

export default ListPerfiles