import React from 'react'
import { Link, useLocation } from 'react-router'
import { FaHome, FaPlus, FaTachometerAlt } from 'react-icons/fa';

export function Navbar() {
    const location = useLocation();

     const navLinks = [
    { to: '/', text: 'Inicio', icon: <FaHome /> },
    { to: '/dashboard', text: 'Lista de Perfiles', icon: <FaTachometerAlt /> },
    { to: '/perfil/agregar', text: 'Agregar Perfil', icon: <FaPlus /> },
  ];
  return (
      <nav className="fixed top-0 left-0 h-screen w-16 hover:w-64 transition-all duration-300 bg-gray-900 text-white p-3 shadow-xl z-50 group">
      <div className="flex flex-col items-center justify-center mb-8 h-10">
        <h2 className="text-2xl font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Menú</h2>
      </div>
  
        <ul className="space-y-6">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`flex items-center p-2 rounded-xl transition-colors duration-200 
                ${location.pathname === link.to ? 'bg-yellow-400 text-gray-900 font-bold' : 'hover:bg-gray-800'}`}
            >
              <div className="w-8 flex items-center justify-center">
                {link.icon}
              </div>
              <span className="opacity-0 w-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 font-medium whitespace-nowrap overflow-hidden">
                {link.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar