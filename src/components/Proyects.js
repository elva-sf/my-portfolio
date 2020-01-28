import React from "react";
import "../stylesheet/Proyects.scss";
import { Link } from "react-router-dom";

function Proyects(props) {
  return (
    <section className="proyects section">
      <div className="section__box">
        <h2 className="section__title">Proyectos</h2>
        <p className="section__text">
          Muy "proud" de mis proyectos y ejercicios que he realizado hasta
          ahora!! :)
        </p>
        <ul className="section__list proyectList">
          {props.proyects.map(proyect => {
            const { id, image, name } = proyect;
            const route = `/proyectdetail/${id}`;
            return (
              <li className="proyectList__itemPro" key={proyect.id}>
                <Link to={route}>
                  <img
                    className="proyectList__imagePro"
                    src={require(`../images/${image}`)}
                    alt="Proyecto de Elva"
                  />
                  <h4 className="proyectList__titlePro">{name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Proyects;
