export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Site de Vagas · Desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/bruno-exemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Bruno
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/carlos-exemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Carlos
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/luiz-exemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Luiz
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/murilo-exemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Murilo
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/natan-exemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Natan
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/pablo-exemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Pablo
        </a>
      </div>
    </footer>
  );
}
