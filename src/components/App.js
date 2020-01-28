import React from "react";
import "../stylesheet/App.scss";
import apiProyects from "../services/proyects.js";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Proyects from "./Proyects";
import ProyectDetail from "./ProyectDetail";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyects: []
    };
    this.renderProyectDetail = this.renderProyectDetail.bind(this);
  }

  componentDidMount() {
    apiProyects().then(proyects => {
      this.setState({
        proyects: proyects
      });
    });
  }

  renderProyectDetail(props) {
    const routeId = props.match.params.id;
    const proyect = this.state.proyects.find(item => item.id === routeId);
    if (proyect === undefined) {
      return <p>Proyecto no encontrado o no existe</p>;
    } else {
      return <ProyectDetail proyect={proyect} />;
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
            <Route path="/proyects">
              <Proyects proyects={this.state.proyects} />
            </Route>
            <Route
              path="/proyectdetail/:id"
              render={this.renderProyectDetail}
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
