import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Equipo } from './Components/Equipo.jsx'
import { EquipoFavorito } from './Pages/EquipoFavorito.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>
  },

  {
    path : "/EquipoFavorito",
    element : <EquipoFavorito/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

