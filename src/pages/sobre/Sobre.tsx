export default function Sobre() {
  return (
    // <div className="text-center mt-10">
    //   <h1 className="text-3xl font-semibold text-blue-700">Sobre o Grupo Valor</h1>
    //   <p className="mt-4 text-gray-600 max-w-xl mx-auto">
    //     Este site foi desenvolvido para gerenciar colaboradores em uma plataforma de vagas.
    //   </p>
    // </div>
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex justify-center"> Sobre o Projeto</h2>
        <p className="text-gray-600 text-xl leading-relaxed mb-6">
          O sistema de RH desenvolvido pelo <span className="font-semibold text-blue-600">Grupo Valor</span> foi criado com o objetivo de otimizar a gestão de pessoas dentro das organizações. A plataforma oferece funcionalidades essenciais como cadastro de colaboradores, atualização de dados, controle de cargos e departamentos, além de ferramentas para facilitar a comunicação interna e a tomada de decisões estratégicas.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 flex justify-center"> Sobre o Grupo Valor</h3>
        <p className="text-gray-600 text-xl leading-relaxed">
          O <span className="font-semibold text-blue-600">Grupo Valor</span> é formado por profissionais comprometidos com a inovação, a eficiência e a excelência em soluções digitais. Com uma abordagem colaborativa e foco em resultados, o grupo busca desenvolver sistemas que realmente façam a diferença no dia a dia das empresas, promovendo agilidade, organização e crescimento sustentável.
        </p>
      </div>
    </div>

  );
}
