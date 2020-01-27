import React from "react";
import "../stylesheet/App.scss";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Proyects from "./Proyects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Proyects />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
