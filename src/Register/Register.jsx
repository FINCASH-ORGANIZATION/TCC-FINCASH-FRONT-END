import { Link } from "react-router-dom";
import { Input } from "../input/input.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registroSchema } from "../Schema/registroSchema"

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

            <form onSubmit={handleSubmit(onSubmitRegistro)} >
                <div className="bg-cinzaEscuro w-screen h-screen font-mono flex items-center justify-center">

                    <div className="w-4/12">

                        <div className="">
                            <div className="text-3xl text-center text-amareloPastel">fincash</div>
                            <div className="text-5xl text-center text-quaseBranco">Faça seu cadastro</div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-2">
                            <h2 className="text-3xl text-quaseBranco my-2">Nome</h2>
                            <h2 className="text-3xl text-quaseBranco my-2">Sobrenome</h2>
                            <Input
                                type="nome"
                                placeholder=""
                                name="nome"
                                register={register}
                                className="">
                            </Input>
                            {errors.nome && <span>{errors.nome.message}</span>}
                            <Input
                                type="sobrenome"
                                placeholder=""
                                name="sobrenome"
                                register={register}
                                className="">
                            </Input>
                            {errors.sobrenome && <span>{errors.sobrenome.message}</span>}

                            <h2 className="text-3xl text-quaseBranco my-2">Endereço de email</h2>
                            <div className="col-span-2">   
                                <Input
                                    type="email"
                                    placeholder=""
                                    name="email"
                                    register={register}
                                    className="col-span-2">
                                </Input>
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <h2 className="text-3xl text-quaseBranco my-2">Senha</h2>
                            <h2 className="text-3xl text-quaseBranco my-2">Repita a senha</h2>
                            <Input
                                type="senha"
                                placeholder=""
                                name="senha"
                                register={register}
                                className="">
                            </Input>                            
                            <Input
                                type="senha"
                                placeholder=""
                                name="senha"
                                register={register}
                                className="">
                            </Input>
                        </div>

                        <button className="bg-amareloPastel text-3xl font-bold font-mono my-4" type="submit" style={{ width: '100%', height: '5rem', borderRadius: '10px' }}>
                                Conecte-se
                            </button>

                        <div className="flex flex-row justify-center mt-2">
                            <h2 className="font-normal text-3xl text-quaseBranco">Já tem cadastro?</h2>

                            <Link to={"/Login"}>
                                <div className="hover:underline decoration-azulclaro">
                                    <h2 className="ml-2 text-3xl text-azulClaro">Login</h2>
                                </div>
                            </Link>
                        </div>
                    </div >
                </div >
            </form>
        </>
    );
}

