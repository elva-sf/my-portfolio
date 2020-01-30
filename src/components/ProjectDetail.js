import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectDetail(props) {
  const { image, name, description, date, link } = props.project;
  return (
    <React.Fragment>
      <div className="projectDetail">
        <img
          className="projectDetail__imageProDet"
          src={require(`../images/${image}`)}
          alt="Proyecto de Elva"
        />
        <h4 className="projectDetail__titleProDet">{name}</h4>
        <p className="projectDetail__descriptProDet">{description}</p>
        <p className="projectDetail__dateProDet">Fecha: {date}</p>
        <a
          className="projectDetail__linkProDet"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
        <Link to="/projects" className="projectDetail__backButton">
          <button type="button" className="projectDetail__btnText">
            <i className="far fa-hand-point-left"></i> Volver a Proyectos
          </button>
        </Link>
      </div>
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
