import React from "react";
import "../stylesheet/App.scss";
import apiData from "../api/api.json";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Proyects from "./Proyects";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyects: apiData
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Home />
          <AboutMe />
          <Proyects proyects={this.state.proyects} />
          <Contact />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
