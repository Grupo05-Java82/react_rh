import React from 'react';

interface ColaboradorProps {
  nome: string;
  cargo: string;
  linkedin: string;
  imagem?: string; // URL da imagem (ex: GitHub ou LinkedIn)
}

export default function ColaboradorCard({ nome, cargo, linkedin, imagem }: ColaboradorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-xs hover:shadow-lg transition">
      {imagem ? (
        <img
          src={imagem}
          alt={`Foto de ${nome}`}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-600"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
          {nome.charAt(0)}
        </div>
      )}

      <h2 className="text-lg font-semibold text-center">{nome}</h2>
      <p className="text-sm text-gray-600 text-center mb-2">{cargo}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-blue-600 hover:underline text-sm"
      >
        Ver no LinkedIn
      </a>
    </div>
  );
}
