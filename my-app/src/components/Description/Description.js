import React from "react";
import "../Description/Description.css";

function Description() {
  return (
    <div className="description">
      <p className="description__headerText">О проекте</p>
      <div className="description__borderBottom"></div>
      <div className="description__information">
        <div className="description__cell">
          <h2 className="description__cellHeader">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="description__cellText">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="description__cell">
          <h2 className="description__cellHeader">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="description__cellText">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="description__deadlines">
        <div className="description__deadlinesBlock">
          <p className="description__deadlinesText">1 неделя</p>
          <p className="description__dedlinesSubtitle">Back-end</p>
        </div>
        <div className="description__deadlinesBlock description__deadlinesBlock_size">
          <p className="description__deadlinesText description__deadlinesText_color">4 недели</p>
          <p className="description__dedlinesSubtitle">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
