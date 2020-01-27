import React from "react";
import "../stylesheet/Proyects.scss";
/* import image from "../images/codeLikeAGirl.png"; */

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
          {/* <img src={image} alt="" /> */}
          <ul className="section__list proyectList">
            {props.proyects.map(proyect => {
              console.log(proyect.image);
              return (
                <li className="proyectList__itemPro" key={proyect.id}>
                  <img
                    className="proyectList__imagePro"
                    src={`${proyect.image}`}
                    alt=""
                  />
                  <h4 className="proyectList__titlePro">{proyect.proyect}</h4>
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
