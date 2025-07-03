import FuncionarioCard from '../../components/funcionarios/FuncionarioCard';



export default function Funcionarios() {
const funcionarios = [
  {
    nome: 'Lívia Monteiro',
    cargo: 'Desenvolvedora Front-end',
    imagem: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    nome: 'Otávio Fernandes',
    cargo: 'Designer UI/UX',
    imagem: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    nome: 'Sofia Almeida',
    cargo: 'Gerente de Projetos',
    imagem: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    nome: 'Henrique Vasconcelos',
    cargo: 'Desenvolvedor Back-end',
    imagem: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    nome: 'Beatriz Nogueira',
    cargo: 'Analista de Dados',
    imagem: 'https://randomuser.me/api/portraits/women/67.jpg',
  },
  {
    nome: 'Rogério Tavares',
    cargo: 'DevOps Engineer',
    imagem: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
  {
    nome: 'Natália Prado',
    cargo: 'Product Owner',
    imagem: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    nome: 'Caio Bernardes',
    cargo: 'QA Tester',
    imagem: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    nome: 'Talita Moura',
    cargo: 'Scrum Master',
    imagem: 'https://randomuser.me/api/portraits/women/34.jpg',
  },
  {
    nome: 'Diego Farias',
    cargo: 'Desenvolvedor Full Stack',
    imagem: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    nome: 'Jéssica Lopes',
    cargo: 'Especialista em Segurança',
    imagem: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    nome: 'Marcelo Antunes',
    cargo: 'Engenheiro de Software',
    imagem: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    nome: 'Aline Castro',
    cargo: 'Cientista de Dados',
    imagem: 'https://randomuser.me/api/portraits/women/78.jpg',
  },
  {
    nome: 'Igor Peixoto',
    cargo: 'Desenvolvedor Mobile',
    imagem: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    nome: 'Vanessa Teixeira',
    cargo: 'Analista de Sistemas',
    imagem: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    nome: 'Murilo Cunha',
    cargo: 'Arquiteto de Software',
    imagem: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    nome: 'Érica Diniz',
    cargo: 'Especialista em Cloud',
    imagem: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    nome: 'Bruno Sanches',
    cargo: 'Engenheiro de Machine Learning',
    imagem: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    nome: 'Paula Rezende',
    cargo: 'Tech Lead',
    imagem: 'https://randomuser.me/api/portraits/women/67.jpg',
  },
  {
    nome: 'Leandro Queiroz',
    cargo: 'Analista de BI',
    imagem: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Colaboradores da empresa
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {funcionarios.map((funcionario) => (
          <FuncionarioCard
            key={funcionario.nome}
            nome={funcionario.nome}
            cargo={funcionario.cargo}
            imagem={funcionario.imagem}       />
        ))}
      </div>
    </div>
  );
}
