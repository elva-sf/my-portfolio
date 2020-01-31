import React from "react";
import photo from "../images/elvaBeige.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero__boxHero">
        <h2 className="hero__titleHero">¡Bienvenid@ a mi portfolio!</h2>
        <img className="hero__imageHero" src={photo} alt="" />
        <p className="hero__textHero">Siéntete libre de explorar :)</p>
      </div>
    </section>
  );
}
export default Home;
