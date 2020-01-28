import React from "react";
import "../stylesheet/Home.scss";
import photo from "../images/elvaGrey.jpeg";

function Home() {
  return (
    <section className="hero">
      <div className="hero__box">
        <h2 className="hero__title">¡Bienveni@ a mi portfolio!</h2>
        <img className="hero__image" src={photo} alt="" />
        <p className="hero__text">Siéntete libre de explorar :)</p>
      </div>
    </section>
  );
}
export default Home;
