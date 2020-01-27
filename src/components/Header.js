import React from "react";
import "../stylesheet/Header.scss";

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="nav">
          <ul className="navList">
            <li className="navList__item active" title="sobre mi">
              <a className="navList__link" href="#">
                Conóceme
              </a>
            </li>
            <li className="navList__item" title="proyectos">
              <a className="navList__link" href="#">
                Proyectos
              </a>
            </li>
            <li className="navList__item" title="contacto">
              <a className="navList__link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
export default Header;
