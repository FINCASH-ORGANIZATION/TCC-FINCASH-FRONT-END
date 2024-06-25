import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./Welcome/Welcome.jsx";
import ErrorPage from "./PaginaDeErro/RotaNaoEncontrada.jsx";
import { Login } from "./Login/Login.jsx";
import { Register } from "./Register/Register.jsx";
import { Home } from "./Home/Home.jsx";
import { EsqueceuSenha } from "./ForgotPassword/ForgotPassword.jsx";
import Cartoes from "./Pages/Cartoes.jsx";
import Contas from "./Pages/Contas.jsx";
import Transacao from "./Pages/Transacao.jsx";
import Perfil from "./Pages/Perfil.jsx";
import { UserProvider } from "./Context/usuarioContext.jsx";
import { TransacaoProvider } from "./Context/transacaoContext.jsx";
import MostrarCartao from "./CardPrincipal/MostrarCartao.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Registro",
        element: <Register />,
      },
      {
        path: "/Esqueceu-Senha",
        element: <EsqueceuSenha />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Cartoes",
        element: <Cartoes />,
      },
      {
        path: "/Contas",
        element: <Contas />,
      },
      {
        path: "/Mostrar/Cartoes",
        element: <MostrarCartao />,
      },
      {
        path: "/Transacao",
        element: <Transacao />,
      },
      {
        path: "/Perfil",
        element: <Perfil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <UserProvider>
      <TransacaoProvider>
        <RouterProvider router={router} />
      </TransacaoProvider>
    </UserProvider>
  </React.StrictMode>
);
