import '../CardPrincipal/CardTransacao.css'
import { Input } from '../input/inputFormShow'


export function CardTransacao() {
    return (
        <div className="w-11/12 h-6/12 absolute mt-40 flex flex-col justify-center">
            <div className="bg-cinzaClaro2 w-full h-6/12 p-10 shadow-2xl shadow-black flex items-center rounded-3xl">
                <div className='left w-full h-full'>
                    <span className='text-8xl text-cinzaClaro5'>Transações</span>
                </div>
                <div className='right w-full flex justify-end'>

                    <Input 
                        type="pesquisa" 
                        placeholder="Pesquise por descrição, valor ou categoria" 
                        name="pesquisa" 
                        className='w-8/12 h-28 rounded-full mr-10 p-10 bg-white flex justify-end items-center'>
                        <img src="../src/Image/search.png" alt="" className='w-20 h-20' />
                    </Input>

                </div>
            </div>

            <div className="bg-cinzaClaro2 h-6/12 mt-20 shadow-2xl shadow-black flex justify-center rounded-3xl">
                <body class="bg-cinzaClaro2 w-full rounded-3xl">
                    <div class="bg-cinzaClaro2 shadow-md rounded-3xl">
                        <table class="w-full border-collapse ">
                            <thead>
                                <tr class="bg-white text-left text-7xl font-medium text-cinzaClaro2 ">
                                    <th class="px-4 py-10">Data</th>
                                    <th class="px-4 py-10">Descrição</th>
                                    <th class="px-4 py-10">Categoria</th>
                                    <th class="px-4 py-10">Conta</th>
                                    <th class="px-4 py-10">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl ">
                                    <td class="px-4 py-10">19/06/2024</td>
                                    <td class="px-4 py-10">Casa</td>
                                    <td class="px-4 py-10">Casa</td>
                                    <td class="px-4 py-10">Carteira</td>
                                    <td class="px-4 py-10 text-red-500">R$ 1.212,12</td>
                                </tr>
                                <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl">
                                    <td class="px-4 py-10">19/06/2024</td>
                                    <td class="px-4 py-10">Investimento</td>
                                    <td class="px-4 py-10">Investimento</td>
                                    <td class="px-4 py-10">Carteira</td>
                                    <td class="px-4 py-10 text-green-500">R$ 121.212,12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-4 flex items-center p-5">
                        <div class="flex items-center">
                            <div className='text-6xl text-white'>Linhas por página:</div>
                            <span className='text-6xl text-white'>2</span>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}