import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from "./pages/sobre/Sobre";
import Colaboradores from "./pages/colaboradores/Colaboradores";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Introducao from "./pages/introducao/Introducao";
import Funcionarios from "./pages/funcionarios/Funcionarios";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-4 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/introducao" element={<Introducao />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}