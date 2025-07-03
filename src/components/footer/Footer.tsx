export default function Footer() {
  return (
    <footer className="bg-[#002a55] text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Site de Vagas · Desenvolvido por <strong>Grupo Valor</strong>
      </div>
    </footer>
  );
}
