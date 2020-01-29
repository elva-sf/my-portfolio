import React from "react";
import "../stylesheet/App.scss";
import apiProjects from "../services/projects.js";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    this.renderProjectDetail = this.renderProjectDetail.bind(this);
  }

  componentDidMount() {
    apiProjects().then(projects => {
      this.setState({
        projects: projects
      });
    });
  }

  //render

  renderProjectDetail(props) {
    const routeId = props.match.params.id;
    const project = this.state.projects.find(item => item.id === routeId);
    if (project === undefined) {
      return <p>Proyecto no encontrado o no existe</p>;
    } else {
      return <ProjectDetail project={project} />;
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutme">
              <AboutMe />
            </Route>
            <Route path="/projects">
              <Projects projects={this.state.projects} />
            </Route>
            <Route
              path="/projectdetail/:id"
              render={this.renderProjectDetail}
            />
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

//PropTypes
ProjectDetail.propTypes = {
  "match.params.id": PropTypes.number
};
