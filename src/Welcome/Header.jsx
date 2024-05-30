import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-cinzaEscuro flex h-20 w-screen items-center justify-between font-mono">
        <Link to="/">
          <span className="pr-6"><img src="./src/Image/logofincash.png" alt="Fincash Logo" style={{ width: '30%', height: 'auto', marginLeft: '20px', marginTop: '3vh' }} /></span>
        </Link>
        <nav className="decoration-none text-branco">
          <a href="" className="pr-6 text-sm text-white ">Sobre os criadores</a>
          <a href="" className="pr-6 text-sm text-white ">Contato</a>
          <a href="./Login">
            <button className="transition-all rounded-full bg-amareloPastel px-10 py-1 font-medium text-black hover:bg-amber-300 mr-16">Faça seu login</button>
          </a>
        </nav>

      </header>
      <Outlet />
    </>
  );
};

export default Header;