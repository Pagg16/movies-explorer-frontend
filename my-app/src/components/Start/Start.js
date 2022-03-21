import React from "react";
import landing from "../../images/landing-logo.png";
import "./Start.css";

function Start() {
  return (
    <div className="start">
      <h1 className="start__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="start__logoBlock">
        <img src={landing} alt="лендинг" className="start__logo" />
      </div>
    </div>
  );
}

export default Start;
