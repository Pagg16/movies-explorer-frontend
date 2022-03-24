import React from "react";
import poitner from "../../images/pointer.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__linkBlock">
          <div className="portfolio__link">
            <a
              href="https://pagg16.github.io/how-to-learn/"
              target="_blank"
              className="portfolio__LinkText"
            >
              Статичный сайт
            </a>
            <a
              href="https://pagg16.github.io/how-to-learn/"
              target="_blank"
              className="portfolio__LinkImg"
            >
              <img
                src={poitner}
                className="portfolio__pointerLink"
                alt="стрелка"
              />
            </a>
          </div>
          <div className="portfolio__linkBlockUnderline"></div>
        </li>
        <li className="portfolio__linkBlock">
          <div className="portfolio__link">
            <a
              href="https://pagg16.github.io/russian-travel/"
              target="_blank"
              className="portfolio__LinkText"
            >
              Адаптивный сайт
            </a>
            <a
              href="https://pagg16.github.io/russian-travel/"
              target="_blank"
              className="portfolio__LinkImg"
            >
              <img
                src={poitner}
                className="portfolio__pointerLink"
                alt="стрелка"
              />
            </a>
          </div>
          <div className="portfolio__linkBlockUnderline"></div>
        </li>
        <li className="portfolio__linkBlock">
          <div className="portfolio__link">
            <a
              href="https://pagg16.github.io/sign-in"
              target="_blank"
              className="portfolio__LinkText"
            >
              Одностраничное приложение
            </a>
            <a
              href="https://pagg16.github.io/sign-in"
              target="_blank"
              className="portfolio__LinkImg"
            >
              <img
                src={poitner}
                className="portfolio__pointerLink"
                alt="стрелка"
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
