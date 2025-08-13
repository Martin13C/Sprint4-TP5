import React from 'react'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 px-4 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        
        {/* Contenedor del copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Gestión de Perfiles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer