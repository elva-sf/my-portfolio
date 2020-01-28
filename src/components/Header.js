import React from "react";
import "../stylesheet/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="nav">
          <ul className="navList">
            <li className="navList__item active" title="Página principal">
              <Link to="/" className="navList__link">
                Home
              </Link>
            </li>
            <li className="navList__item active" title="Sobre mi">
              <Link to="/about/:id" className="navList__link">
                Conóceme
              </Link>
            </li>
            <li className="navList__item" title="Proyectos">
              <Link to="/proyects/:id" className="navList__link">
                Proyectos
              </Link>
            </li>
            <li className="navList__item" title="Contacto">
              <Link to="/contact/:id" className="navList__link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
export default Header;
