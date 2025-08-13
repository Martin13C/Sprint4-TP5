import { Route, Routes } from 'react-router'
import PerfilDetalles from '../pages/PerfilDetalles'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Editar from '../pages/Editar'
import NotFound from '../pages/NotFound'
import Agregar from '../pages/Agregar'

export function AppRoutes() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/perfil/:id' element={<PerfilDetalles />} />
        <Route path='/perfil/agregar' element={<Agregar/>} />
        <Route path='/perfil/:id/editar' element={<Editar />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default AppRoutes