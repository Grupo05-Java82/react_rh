export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-5 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Site de Vagas · Desenvolvido por Grupo Valor
      </div>
    </footer>
  );
}
