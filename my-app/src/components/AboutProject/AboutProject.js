import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="aboutProject">
      <p className="aboutProject__headerText">О проекте</p>
      <div className="aboutProject__borderBottom"></div>
      <div className="aboutProject__information">
        <div className="aboutProject__cell">
          <h2 className="aboutProject__cellHeader">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="aboutProject__cellText">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__cell">
          <h2 className="aboutProject__cellHeader">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="aboutProject__cellText">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__deadlines">
        <div className="aboutProject__deadlinesBlock">
          <p className="aboutProject__deadlinesText">1 неделя</p>
          <p className="aboutProject__dedlinesSubtitle">Back-end</p>
        </div>
        <div className="aboutProject__deadlinesBlock aboutProject__deadlinesBlock_size">
          <p className="aboutProject__deadlinesText aboutProject__deadlinesText_color">4 недели</p>
          <p className="aboutProject__dedlinesSubtitle">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
