import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="navList__item active" title="Página principal">
            <Link to="/" className="navList__link">
              Home
            </Link>
          </li>
          <li className="navList__item active" title="Sobre mi">
            <Link to="/aboutme" className="navList__link">
              Conóceme
            </Link>
          </li>
          <li className="navList__item" title="Proyectos">
            <Link to="/projects" className="navList__link">
              Proyectos
            </Link>
          </li>
          <li className="navList__item" title="Contacto">
            <Link to="/contact" className="navList__link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
