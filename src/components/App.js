import React from "react";
import "../stylesheet/App.scss";
import apiProyects from "../services/proyects.js";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Proyects from "./Proyects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyects: []
    };
  }

  componentDidMount() {
    apiProyects().then(proyects => {
      this.setState({
        proyects: proyects
      });
    });
  }

  renderProyectDetail(props) {
    console.log(props);
  }

  render() {
    console.log(this.state);

    return (
      <React.Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about/:id">
              <AboutMe />
            </Route>
            <Route path="/proyects/:id" render={this.renderProyectDetail}>
              <Proyects proyects={this.state.proyects} />
            </Route>
            <Route path="/contact/:id">
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
