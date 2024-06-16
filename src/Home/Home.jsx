import { CardHome } from "../Card/CardHome.jsx";
import { HeaderHome } from "../header/header.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";
import CardSaldo from "../CardPrincipal/CardSaldo.jsx";
import { useEffect } from "react";
import Cookies from "js-cookie";

export function Home() {
  useEffect(() => {
    console.log(Cookies.get("token"));
  }, []);

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
        <CardHome />
        <CardSaldo />
        <NavigationBar />
      </div>
    </>
  );
}
