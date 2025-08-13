import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { PerfilesProvider } from './context/PerfilesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PerfilesProvider>
        <App />
      </PerfilesProvider>
    </BrowserRouter>
  </StrictMode>,
)
