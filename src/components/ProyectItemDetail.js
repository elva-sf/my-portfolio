import React from "react";
import "../stylesheet/Proyects.scss";

function ProyectItemDetail(props) {
  console.log(props.proyect);

  return (
    <React.Fragment>
      <img
        className="proyectList__imagePro"
        src={require(`../images/${props.proyect.image}`)}
        alt=""
      />
      <h4 className="proyectList__titlePro">{props.proyect.name}</h4>
      <p className="proyectList__descriptPro">{props.proyect.description}</p>
      <p className="proyectList__datePro">{props.proyect.date}</p>
      <a
        className="section__link"
        href={props.proyect.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.proyect.link}
      </a>
    </React.Fragment>
  );
}
export default ProyectItemDetail;
