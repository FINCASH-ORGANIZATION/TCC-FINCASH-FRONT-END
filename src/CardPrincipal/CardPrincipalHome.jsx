export default function CardPrincipalHome() {
  return (
    <div className="bg-cinzaClaro2 absolute w-9/12 h-6/12 mt-96 shadow-2xl shadow-black flex justify-center rounded-3xl">
      <div class="bg-cinzaClaro2 w-full rounded-3xl">
          <div class="bg-cinzaClaro2 shadow-md rounded-3xl">
              <table class="w-full border-collapse ">
                  <thead>
                      <tr class="bg-white text-left text-7xl font-medium text-cinzaClaro2 ">
                          <th class="px-4 py-10 text-center">Data</th>
                          <th class="px-4 py-10 text-center">Descrição</th>
                          <th class="px-4 py-10 text-center">Categoria</th>
                          <th class="px-4 py-10 text-center">Conta</th>
                          <th class="px-4 py-10 text-center">Valor</th>
                          <th class="px-4 py-10"></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl text-center">
                          <td class="px-4 py-10">1/02/2024</td>
                          <td class="px-4 py-10">Conta</td>
                          <td class="px-4 py-10">Casa</td>
                          <td class="px-4 py-10">Carteira</td>
                          <td class="px-4 py-10 text-red-500">R$ 1.212,12</td>
                          <button className="rounded-xl bg-red-500 px-5 py-1 mt-8">Deletar</button>
                      </tr>
                      <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl text-center">
                          <td class="px-4 py-10">19/02/2024</td>
                          <td class="px-4 py-10">Investimento</td>
                          <td class="px-4 py-10">Investimento</td>
                          <td class="px-4 py-10">Carteira</td>
                          <td class="px-4 py-10 text-green-500">R$ 121.212,12</td>
                          <button className="rounded-xl bg-red-500 px-5 py-1 mt-8">Deletar</button>
                      </tr>
                      <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl text-center">
                          <td class="px-4 py-10">24/03/2024</td>
                          <td class="px-4 py-10">Casa</td>
                          <td class="px-4 py-10">Casa</td>
                          <td class="px-4 py-10">Carteira</td>
                          <td class="px-4 py-10 text-red-500">R$ 1.212,12</td>
                          <button className="rounded-xl bg-red-500 px-5 py-1 mt-8">Deletar</button>
                      </tr>
                      <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl text-center">
                          <td class="px-4 py-10">11/04/2024</td>
                          <td class="px-4 py-10">Investimento</td>
                          <td class="px-4 py-10">Investimento</td>
                          <td class="px-4 py-10">Carteira</td>
                          <td class="px-4 py-10 text-green-500">R$ 121.212,12</td>
                          <button className="rounded-xl bg-red-500 px-5 py-1 mt-8">Deletar</button>
                      </tr>
                      <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl text-center">
                          <td class="px-4 py-10">13/05/2024</td>
                          <td class="px-4 py-10">Casa</td>
                          <td class="px-4 py-10">Casa</td>
                          <td class="px-4 py-10">Carteira</td>
                          <td class="px-4 py-10 text-red-500">R$ 1.212,12</td>
                          <button className="rounded-xl bg-red-500 px-5 py-1 mt-8">Deletar</button>
                      </tr>
                      <tr class="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl text-center">
                          <td class="px-4 py-10">19/06/2024</td>
                          <td class="px-4 py-10">Investimento</td>
                          <td class="px-4 py-10">Investimento</td>
                          <td class="px-4 py-10">Carteira</td>
                          <td class="px-4 py-10 text-green-500">R$ 121.212,12</td>
                          <button className="rounded-xl bg-red-500 px-5 py-1 mt-8">Deletar</button>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
  );
}
