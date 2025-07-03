
function Introducao() {
  return (
    <>
      <div className="text-center mt-10 flex gap-4 justify-center items-center border border-blue-700 p-4 rounded-lg max-w-8xl mx-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-blue-700">Bem-vindo </h1>
          <h1 className="text-4xl font-bold text-blue-700">RH Human</h1>
        </div>
        <p className="mt-8 text-gray-600 mx-4 max-w-xl">O RH Company é um sistema criado para ajudar empresas a organizar melhor as informações dos seus funcionários. E conta também com um sistema (API) desenvolvida para otimizar a gestão de informações de colaboradores dentro de nossa organização. Sua principal função é armazenar e organizar dados essenciais, como informações pessoais, histórico profissional e campo de atuação. Ele funciona como uma central onde o setor de RH pode:</p>
      </div>
      {/* <div>
          <img src="https://blog.ipog.edu.br/wp-content/uploads/2017/06/shutterstock_215609275.jpg" 
          alt="Imagem de ilustração serviços"
          width={400}
          className="rounded-full" />
      </div> */}

      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Serviços oferecidos: </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <div className="text-blue-600 text-2xl">➕</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Cadastrar novos colaboradores</h3>
              <p className="text-sm text-gray-500">Adicione novos membros à equipe com facilidade.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <div className="text-green-600 text-2xl">👥</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Consultar quem já trabalha na empresa</h3>
              <p className="text-sm text-gray-500">Visualize a lista atual de colaboradores ativos.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <div className="text-yellow-500 text-2xl">✏️</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Atualizar dados quando algo muda</h3>
              <p className="text-sm text-gray-500">Mantenha as informações sempre atualizadas.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <div className="text-red-600 text-2xl">🗑️</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Remover registros, se necessário</h3>
              <p className="text-sm text-gray-500">Exclua colaboradores que não fazem mais parte da equipe.</p>
            </div>
          </li>
        </ul>
      </div>

    </>


    // Cadastrar novos colaboradores

    // Consultar quem já trabalha na empresa

    // Atualizar dados quando algo muda

    // Remover registros, se necessário

    // Tudo isso acontece de forma rápida e organizada, por meio de um sistema chamado de API (que conecta os dados ao sistema principal).

    // Ele foi desenvolvido por uma equipe com 6 pessoas, usando ferramentas modernas, e pode ser usado por empresas que querem facilitar a gestão de seus times.
    
  )
}

export default Introducao