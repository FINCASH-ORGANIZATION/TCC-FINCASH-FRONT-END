import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Welcome/Header'
import Welcome from './Welcome/Welcome.jsx'
import ErrorPage from './PaginaDeErro/RotaNaoEncontrada.jsx'
import { Login } from './Login/Login.jsx'
import { Register } from './Register/Register.jsx'

// Componente de layout que inclui o header
const LayoutWithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithHeader />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Welcome />
      }
    ],
  },
  // Rota de login sem o header
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Registro",
    element: <Register />
  }
])

// Renderiza o App.jsx, que por sua vez está contendo as rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
