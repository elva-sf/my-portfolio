import React from "react";
import "../stylesheet/Proyects.scss";

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
                  <img
                    className="proyectList__imagePro"
                    src={require(`../images/${proyect.image}`)}
                    alt=""
                  />
                  <h4 className="proyectList__titlePro">{proyect.name}</h4>
                  <p className="proyectList__descriptPro">
                    {proyect.description}
                  </p>
                  <span className="proyectList__datePro">{proyect.date}</span>
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
