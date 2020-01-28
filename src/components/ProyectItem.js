import React from "react";
import "../stylesheet/Proyects.scss";
import { Link } from "react-router-dom";

function ProyectItem(props) {
  const { id, image, name } = props.proyect;
  const route = `/proyectdetail/${id}`;
  return (
    <Link to={route}>
      <img
        className="proyectList__imagePro"
        src={require(`../images/${image}`)}
        alt="Proyecto de Elva"
      />
      <h4 className="proyectList__titlePro">{name}</h4>
    </Link>
  );
}
export default ProyectItem;
