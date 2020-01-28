import React from "react";
import "../stylesheet/Proyects.scss";
import { Link } from "react-router-dom";

function ProyectItemDetail(props) {
  const { image, name, description, date, link } = props.proyect;
  return (
    <React.Fragment>
      <img
        className="proyectList__imagePro"
        src={require(`../images/${image}`)}
        alt="Proyecto de Elva"
      />
      <h4 className="proyectList__titlePro">{name}</h4>
      <p className="proyectList__descriptPro">{description}</p>
      <p className="proyectList__datePro">{date}</p>
      <a
        className="section__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <Link to="/proyects">
        <button type="button" className="proyectList__backButton">
          <i className="far fa-hand-point-left"></i> Volver a Proyectos
        </button>
      </Link>
    </React.Fragment>
  );
}
export default ProyectItemDetail;
