import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Header from './Welcome/Header'
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

// Renderiza o App.jsx, que por sua vez está contendo as rotas, tais elas como: Pagina Welcome, login e afins. Isso tudo é renderizado e mostrado todo o esquema do front na tela.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
