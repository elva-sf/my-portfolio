import React from "react";
import "../stylesheet/Proyects.scss";
import { Link } from "react-router-dom";

function ProyectItem(props) {
  console.log(props.proyect);

  const route = `/proyectdetail/${props.proyect.id}`;
  return (
    <Link to={route}>
      <React.Fragment>
        <img
          className="proyectList__imagePro"
          src={require(`../images/${props.proyect.image}`)}
          alt=""
        />
        <h4 className="proyectList__titlePro">{props.proyect.name}</h4>
        {/*  <p className="proyectList__descriptPro">{props.proyect.description}</p>
      <span className="proyectList__datePro">{props.proyect.date}</span> */}
      </React.Fragment>
    </Link>
  );
}
export default ProyectItem;
