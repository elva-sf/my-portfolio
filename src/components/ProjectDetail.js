import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectDetail(props) {
  const { image, name, description, date, link } = props.project;
  return (
    <React.Fragment>
      <img
        className="projectList__imagePro"
        src={require(`../images/${image}`)}
        alt="Proyecto de Elva"
      />
      <h4 className="projectList__titlePro">{name}</h4>
      <p className="projectList__descriptPro">{description}</p>
      <p className="projectList__datePro">{date}</p>
      <a
        className="section__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <Link to="/projects">
        <button type="button" className="projectList__backButton">
          <i className="far fa-hand-point-left"></i> Volver a Proyectos
        </button>
      </Link>
    </React.Fragment>
  );
}
export default ProjectDetail;

//PropTypes
ProjectDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string
};
