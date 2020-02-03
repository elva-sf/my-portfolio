import React from "react";
import PropTypes from "prop-types";

function Filters(props) {
  function handleChange(ev) {
    props.handleChange({ mainTool: ev.target.value });
  }
  function handlePrevent(ev) {
    ev.preventDefault();
  }
  return (
    <form className="filterForm" onSubmit={handlePrevent}>
      <select
        className="filterForm__select"
        name="mainTool"
        onChange={handleChange}
        value={props.mainTool}
      >
        <option className="filterForm__option" value="All">
          Todos
        </option>
        <option className="filterForm__option" value="HTML5 & CSS3 (SASS)">
          HTML5 & CSS3 (SASS)
        </option>
        <option className="filterForm__option" value="JavaScript">
          JavaScript
        </option>
        <option className="filterForm__option" value="React">
          React
        </option>
      </select>
    </form>
  );
}
export default Filters;

//PropTypes
Filters.propTypes = {
  mainTool: PropTypes.string.isRequired
};
