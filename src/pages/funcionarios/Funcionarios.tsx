import React from 'react';
import FuncionarioCard from '../../components/funcionarios/FuncionarioCard';



export default function Funcionarios() {
  const membros = [
    {
      nome: 'Carlos Moroni',
      cargo: 'Desenvolvedor Front-end',    
      imagem: 'https://github.com/carlosmoronisud.png', // ✅ Sua imagem do GitHub
    },
    {
      nome: 'Bruno',
      cargo: 'Designer UI/UX',      
      imagem: 'https://github.com/BrunoAlves-tech.png', // 🔄 Substitua com o GitHub real
    },
    {
      nome: 'Luiz',
      cargo: 'Dev Fullstack',      
      imagem: 'https://github.com/usuario-luiz.png', // 🔄 Substitua com o GitHub real
    },
    {
      nome: 'Murilo',
      cargo: 'Product Owner',    
      imagem: 'https://github.com/Matttosz.png', // 🔄 Substitua com o GitHub real
    },
    {
      nome: 'Natan',
      cargo: 'QA Tester',      
      imagem: 'https://github.com/natanmac.png', // 🔄 Substitua com o GitHub real
    },
    {
      nome: 'Pablo',
      cargo: 'Scrum Master',      
      imagem: 'https://github.com/Pablo-Casagrande.png', // 🔄 Substitua com o GitHub real
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Funcionários da empresa
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {membros.map((membro) => (
          <FuncionarioCard
            key={membro.nome}
            nome={membro.nome}
            cargo={membro.cargo}
            imagem={membro.imagem}       />
        ))}
      </div>
    </div>
  );
}
