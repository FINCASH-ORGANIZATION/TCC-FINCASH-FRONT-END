import { useSpring, animated } from "react-spring";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Cria uma animação de desvanecimento usando react-spring
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <animated.div id="error-page" style={fadeIn} className="flex flex-col items-center justify-center min-h-screen font-mono text-white bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mb-5">Oops!</h1>
        <p className="text-xl mb-10">Desculpe, ocorreu um erro inesperado.</p>
        <p className="text-xl mb-10">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Link to="/">
        <button className="transition-all rounded-full bg-amber-400 px-10 py-3 font-medium font-mono text-lg text-black hover:bg-amber-500">Voltar para a página inicial</button>
      </Link>
    </animated.div>
  );
}