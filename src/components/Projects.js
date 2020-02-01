import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Projects(props) {
  const { mainTool } = props.mainTool;
  function handleChange(ev) {
    props.handleChange(ev.target.value);
  }
  return (
    <section className="projects section">
      <div className="section__box">
        <h2 className="section__title">Proyectos</h2>
        <p className="section__text">
          Muy "proud" de mis proyectos y ejercicios que he realizado hasta
          ahora!! :)
        </p>
        <div>
          <select name="mainTool" onChange={handleChange} value={mainTool}>
            <option value="All">Todos</option>
            <option value="HTML5 & CSS3 (SASS)">HTML5 & CSS3 (SASS)</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>
        <ul className="section__list projectList">
          {props.projects.map(project => {
            const { id, image, name } = project;
            const route = `/projectdetail/${id}`;
            return (
              <li className="projectList__itemPro" key={project.id}>
                <Link to={route} className="projectList__linkPro">
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
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainTool: PropTypes.string
};
