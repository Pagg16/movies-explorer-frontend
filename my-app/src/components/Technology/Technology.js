import React from "react";
import "./Technology.css";

function Technology() {
  return (
    <div className="technology">
      <p className="technology__headerText">Технологии</p>
      <div className="technology__borderBottom"></div>
      <p className="technology__title">7 технологий</p>
      <p className="technology__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="technology__exampleBlock">
      <p className="technology__exampleText">HTML</p>
      <p className="technology__exampleText">CSS</p>
      <p className="technology__exampleText">JS</p>
      <p className="technology__exampleText">React</p>
      <p className="technology__exampleText">Git</p>
      <p className="technology__exampleText">Express.js</p>
      <p className="technology__exampleText">mongoDB</p>
      </div>
    </div>
  );
}

export default Technology;
