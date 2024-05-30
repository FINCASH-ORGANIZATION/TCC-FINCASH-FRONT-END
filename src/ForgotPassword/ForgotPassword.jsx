function ForgotPassword() {
  return (
    <>
      <a href="./Login"><img src="./src/Image/back.png" alt="" className="absolute m-5 w-6 h-6" /></a>
      <div className="container w-screen mx-auto mt-16 flex items-center justify-center">
        <div className="card w-screen py-4 px-6 m-4 rounded-md max-w-prose">
          <div className="flex flex-col items-center px-6 mx-4">
            <a href=""><div className="font-thin not-italic tracking-widest text-xl mt-14 text-white">fincash</div></a>
            <div className="font-semibold text-4xl">Esqueceu sua senha</div>
          </div>
          <h2 className="font-normal text-2xs items-start mt-8">Endereço de email</h2>
          <input className="w-full h-11 rounded-md max-w-prose text-gray-800 pl-2 text-lg" type="email"></input>
          <button className="w-full h-14 rounded-md bg-amareloPastel hover:bg-amber-300 text-black font-bold max-w-prose mt-5 text-xl">Conecte-se</button>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword