import React from "react";
import "../Description/Description.css";
import "./Technology.css";

function Technology() {
  return (
    <div className="technology">
      <p className="description__headerText">Технологии</p>
      <div className="description__borderBottom"></div>
      <p className="technology__header">7 технологий</p>
      <p className="technology__title">
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
