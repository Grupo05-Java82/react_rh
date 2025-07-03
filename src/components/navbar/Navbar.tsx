import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#002a55] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          RH Human
        </NavLink>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/introducao"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Introdução
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/funcionarios"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Colaboradores
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colaboradores"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Equipe
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
