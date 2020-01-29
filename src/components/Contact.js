import React from "react";

function Contact() {
  return (
    <section className="contact section">
      <div className="section__box">
        <h2 className="section__title">Contacto</h2>
        <p className="section__text">
          No dudes en escribirme, responderé encantada :)
        </p>
        <a
          className="section__link"
          href="mailto:e.souto.fernandez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          e.souto.fernandez@gmail.com
        </a>
      </div>
    </section>
  );
}
export default Contact;
