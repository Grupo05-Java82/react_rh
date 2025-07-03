import ColaboradorCard from "../../components/colaborador/ColaboradorCard";


export default function Colaboradores() {
  const membros = [
    {
      nome: 'Carlos Moroni',
      cargo: 'Desenvolvedor Front-end',
      linkedin: 'https://www.linkedin.com/in/carlosmoroni/',
      imagem: 'https://github.com/carlosmoronisud.png', 
    },
    {
      nome: 'Bruno',
      cargo: 'Designer UI/UX',
      linkedin: 'https://www.linkedin.com/in/bruno-exemplo',
      imagem: 'https://github.com/BrunoAlves-tech.png', 
    },
    {
      nome: 'Luiz',
      cargo: 'Dev Fullstack',
      linkedin: 'https://www.linkedin.com/in/luizhenrique-dev/',
      imagem: 'https://github.com/luizsantos7.png', 
    },
    {
      nome: 'Murilo',
      cargo: 'Product Owner',
      linkedin: 'https://www.linkedin.com/in/murilomattosm/',
      imagem: 'https://github.com/Matttosz.png', 
    },
    {
      nome: 'Natan',
      cargo: 'QA Tester',
      linkedin: 'https://www.linkedin.com/in/natan-macedo/',
      imagem: 'https://github.com/natanmac.png', 
    },
    {
      nome: 'Pablo',
      cargo: 'Scrum Master',
      linkedin: 'https://github.com/Pablo-Casagrande',
      imagem: 'https://github.com/Pablo-Casagrande.png', 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Equipe Desenvolvedora do Projeto
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {membros.map((membro) => (
          <ColaboradorCard
            key={membro.nome}
            nome={membro.nome}
            cargo={membro.cargo}
            linkedin={membro.linkedin}
            imagem={membro.imagem}
          />
        ))}
      </div>
    </div>
  );
}
