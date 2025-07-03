
interface FuncionarioProps {
  nome: string;
  cargo: string;
  imagem?: string; 
}

export default function FuncionarioCard({ nome, cargo, imagem }: FuncionarioProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-xs hover:shadow-lg transition hover:scale-110 hover:cursor-pointer">
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
      
    </div>
  );
}
