import React from "react";
import "../stylesheet/Proyects.scss";
import ProyectItem from "./ProyectItem.js";

function Proyects(props) {
  return (
    <React.Fragment>
      <section className="proyects section">
        <div className="section__box">
          <h2 className="section__title">Proyectos</h2>
          <p className="section__text">
            Muy "proud" de mis proyectos y ejercicios que he realizado hasta
            ahora!! :)
          </p>
          <ul className="section__list proyectList">
            {props.proyects.map(proyect => {
              return (
                <li className="proyectList__itemPro" key={proyect.id}>
                  <ProyectItem proyect={proyect} key={proyect.id} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Proyects;
