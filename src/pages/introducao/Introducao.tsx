
function Introducao() {
  return (
    <>
      <div className="text-center mt-10 flex gap-4 justify-center items-center border border-blue-700 p-4 rounded-lg max-w-8xl mx-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-blue-700">Bem-vindo </h1>
          <h1 className="text-4xl font-bold text-blue-700">RH Human</h1>
        </div>
        <p className="mt-8 text-gray-600 mx-4 max-w-xl">O RH Company é um sistema criado para ajudar empresas a organizar melhor as informações dos seus funcionários. Ele funciona como uma central onde o setor de RH pode:</p>
      </div>
      <div>
          <img src="https://blog.ipog.edu.br/wp-content/uploads/2017/06/shutterstock_215609275.jpg" 
          alt="Imagem de ilustração serviços"
          width={400}
          className="rounded-full" />
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