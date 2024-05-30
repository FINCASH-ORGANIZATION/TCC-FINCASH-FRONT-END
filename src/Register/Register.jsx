import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registroSchema } from "../Schema/registroSchema"
import { Input } from "../input/input";

function onSubmitRegistro(data) {
    console.log(data);
}

export function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: zodResolver(registroSchema)
        });



    return (
        <>
            <Link to={"/Login"}>
                <div><img src="./src/Image/back.png" alt="Seta de retorno" className="absolute m-5 w-6 h-6" /></div></Link>

            <form onSubmit={handleSubmit(onSubmitRegistro)}>
                <div className="container w-screen mx-auto mt-10 flex items-center justify-center">

                    <div className="card w-screen py-4 px-6 m-4 rounded-md max-w-prose">

                        <div className="flex flex-col items-center px-6 mx-4">
                            <a href=""><div className="font-thin not-italic tracking-widest text-xl text-white">fincash</div></a>
                            <div className="font-semibold text-4xl">Faça seu cadastro</div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1">
                            <h2 className="font-normal text-2xs items-start">Nome</h2>
                            <Input
                                type="nome"
                                placeholder=""
                                name="nome"
                                register={register}
                                className="w-full h-11 rounded-md max-w-prose text-gray-800 pl-2 text-lg">
                            </Input>
                            {errors.nome && <span>{errors.nome.message}</span>}

                            <h2 className="font-normal text-2xs items-start">Sobrenome</h2>
                            <Input
                                type="sobrenome"
                                placeholder=""
                                name="sobrenome"
                                register={register}
                                className="w-full h-11 rounded-md max-w-prose text-gray-800 pl-2 text-lg">
                            </Input>
                            {errors.sobrenome && <span>{errors.sobrenome.message}</span>}
                            <h2 className="font-normal text-2xs items-start">Endereço de email</h2>
                            <Input
                                type="email"
                                placeholder=""
                                name="email"
                                register={register}
                                className="w-full h-11 rounded-md max-w-prose text-gray-800 pl-2 text-lg col-span-2">
                            </Input>
                            {errors.email && <span>{errors.email.message}</span>}
                            <h2 className="font-normal text-2xs items-start">Senha</h2>
                            <Input
                                type="senha"
                                placeholder=""
                                name="senha"
                                register={register}
                                className="w-full h-11 rounded-md max-w-prose text-gray-800 pl-2 text-lg">
                            </Input>

                            <h2 className="font-normal text-2xs items-start">Repita a senha</h2>
                            <Input
                                type="senha"
                                placeholder=""
                                name="senha"
                                register={register}
                                className="w-full h-11 rounded-md max-w-prose text-gray-800 pl-2 text-lg">
                            </Input>

                            <button className="w-full h-14 rounded-md bg-amareloPastel hover:bg-amber-300 text-black font-bold max-w-prose mt-5 text-xl" type="submit">
                                Conecte-se
                            </button>
                        </div>

                        <div className="flex flex-row justify-center mt-2">
                            <h2 className="font-normal text-2xs">Já tem cadastro?</h2>

                            <Link to={"/Login"}>
                                <div className="hover:underline decoration-azulclaro">
                                    <h2 className="ml-1 text-azulClaro">Login</h2>
                                </div>
                            </Link>
                        </div>
                    </div >
                </div >
            </form>
        </>
    );
}

