import { CardHome } from "../Card/CardHome.jsx";
import { HeaderHome } from "../header/header.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";
import CardPrincipalHome from "../CardPrincipal/CardPrincipalHome.jsx";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    //    console.log(Cookies.get("token"));
  }, []);

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center ">
        <CardHome />
        <CardPrincipalHome />
        <NavigationBar />
      </div>
    </>
  );
}
