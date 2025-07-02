export default function Home() {
  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <img
        src="https://ik.imagekit.io/8h7kfljfc/imagem/mulher-que-seleciona-imagens-de-pessoas.jpg?updatedAt=1751486019141" // Substitua pelo caminho da sua imagem
        alt="Imagem hero RH Company"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-800 drop-shadow-lg">
          RH Company
        </h1>
      </div>
    </section>
  );
}
