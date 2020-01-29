import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Projects(props) {
  return (
    <section className="projects section">
      <div className="section__box">
        <h2 className="section__title">Proyectos</h2>
        <p className="section__text">
          Muy "proud" de mis proyectos y ejercicios que he realizado hasta
          ahora!! :)
        </p>
        <ul className="section__list projectList">
          {props.projects.map(project => {
            const { id, image, name } = project;
            const route = `/projectdetail/${id}`;
            return (
              <li className="projectList__itemPro" key={project.id}>
                <Link to={route}>
                  <img
                    className="projectList__imagePro"
                    src={require(`../images/${image}`)}
                    alt="Proyecto de Elva"
                  />
                  <h4 className="projectList__titlePro">{name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Projects;

//PropTypes
Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};
