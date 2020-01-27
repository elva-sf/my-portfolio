import React from "react";
import "../stylesheet/Footer.scss";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <nav className="footerNav">
          <ul className="footerNavList">
            <li className="footerNavList__item">
              <a
                className="footerNavList__link"
                href="https://twitter.com/ElvaSouto"
                target="_blank"
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
              >
                <i className="footerNavList__icon fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
        <span>© 2020 Elva Souto Fernández</span>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
