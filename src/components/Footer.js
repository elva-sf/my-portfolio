import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footerNav">
        <ul className="footerNavList">
          <li className="footerNavList__item">
            <a
              className="footerNavList__link"
              href="https://twitter.com/ElvaSouto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="footerNavList__icon fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <ul className="footerNavList">
          <li className="footerNavList__item">
            <a
              className="footerNavList__link"
              href="https://www.linkedin.com/in/elvasoutofernandez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="footerNavList__icon fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <ul className="footerNavList">
          <li className="footerNavList__item">
            <a
              className="footerNavList__link"
              href="https://github.com/elva-sf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="footerNavList__icon fab fa-github-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
      <span className="footer__copyRight">© 2020 Elva Souto Fernández</span>
    </footer>
  );
}
export default Footer;
