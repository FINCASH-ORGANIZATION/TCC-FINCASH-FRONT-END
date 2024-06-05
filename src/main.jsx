import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Welcome/Header'
import Welcome from './Welcome/Welcome.jsx'
import ErrorPage from './PaginaDeErro/RotaNaoEncontrada.jsx'
import { Login } from './Login/Login.jsx'
import { Register } from './Register/Register.jsx'
import ForgotPassword from './ForgotPassword/ForgotPassword.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Registro",
        element: <Register />
      },
      {
        path: "/Esqueceu-Senha",
        element: <ForgotPassword />
      }
    ],
  },
])

// Renderiza o App.jsx, que por sua vez está contendo as rotas, tais elas como: Pagina Welcome, login e afins. Isso tudo é renderizado e mostrado todo o esquema do front na tela.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
