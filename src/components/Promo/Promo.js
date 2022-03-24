import React from "react";
import landing from "../../images/landing-logo.png";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__logoBlock">
        <img src={landing} alt="лендинг" className="promo__logo" />
      </div>
    </div>
  );
}

export default Promo;
