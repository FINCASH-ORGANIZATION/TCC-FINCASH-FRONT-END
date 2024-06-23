import { useContext, useEffect } from "react";
import { TransacaoContext } from "../Context/transacaoContext";

export default function CardPrincipalHome() {
  const { transacao } = useContext(TransacaoContext);

  useEffect(() => {}, [transacao]);

  return (
    <div className="bg-cinzaClaro2 absolute w-9/12 h-6/12 mt-96 shadow-2xl shadow-black flex justify-center rounded-3xl">
      <div className="bg-cinzaClaro2 w-full rounded-3xl">
        <div className="bg-cinzaClaro2 shadow-md rounded-3xl">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="bg-white text-left text-7xl font-medium text-cinzaClaro2 ">
                <th className="px-4 py-10 text-center">Data</th>
                <th className="px-4 py-10 text-center">Descrição</th>
                <th className="px-4 py-10 text-center">Categoria</th>
                <th className="px-4 py-10 text-center">Conta</th>
                <th className="px-4 py-10 text-center">Valor</th>
                <th className="px-4 py-10"></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(transacao) ? (
                transacao.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl"
                  >
                    <td className="px-4 py-10">{item.data}</td>
                    <td className="px-4 py-10">{item.descricao}</td>
                    <td className="px-4 py-10">
                      {item.categoria.categoriaPersonalizada}
                    </td>
                    <td className="px-4 py-10">{item.conta}</td>
                    <td className="px-4 py-10">{item.valor}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhum dado de transação disponível</td>
                </tr>
              )}
            </tbody>
            <tfoot></tfoot>
          </table>
          <div className="flex justify-end items-center mt-4 bg-zinc-800">
            <span className="text-white text-5xl mr-5">Adicionar</span>
            <button className="bg-green-600 text-5xl text-white p-5 rounded-xl">
              Receita
            </button>
            <span className="text-white text-5xl mx-5">ou</span>
            <button className="bg-red-600 text-5xl text-white p-5 my-5 mr-10 rounded-xl">
              Despesas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
