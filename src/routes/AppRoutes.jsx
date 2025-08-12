import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Cart from '../components/Carts'
import Agregar from '../pages/Agregar'
import Edit from '../pages/Edit'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <>
                <Routes >
                    <Route path='/' element={<Home/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/perfil/:id' element={<Cart/>}/>
                    <Route path='/perfil/agregar' element={<Agregar/>}/>
                    <Route path='/perfil/:id/editar' element={<Edit/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>

    </>
  )
}

export default AppRoutes