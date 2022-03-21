import React from "react";
import "../Description/Description.css";
import "./Student.css";
import poitner from "../../images/pointer.png";

function Student() {
  return (
    <div className="student">
      <p className="description__headerText">Студент</p>
      <div className="description__borderBottom"></div>
      <div className="student__meInform">
        <div className="student__description">
          <p className="student__name">Павел</p>
          <p className="studetn__about">Фронтенд-разработчик, 22 года</p>
          <p className="student__descriptionText">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="student__socialNetwork">
            <a href="#" target="_blank" className="student__link">
              Telegram
            </a>
            <a href="#" target="_blank" className="student__link">
              Github
            </a>
          </div>
        </div>
        <img
          src={"https://cdn1.ozone.ru/s3/multimedia-k/c1200/6074200376.jpg"}
          alt="аватар"
          className="student__avatar"
        />
      </div>
      <div className="student__portfolio">
        <p className="student__portfolioHeader">Портфолио</p>
        <ul className="studetn__portfolioList">
          <li className="student__linkBlock">
            <div className="studetn__link">
              <a
                href="#"
                target="_blank"
                className="student__portfolioLinkText"
              >
                Статичный сайт
              </a>
              <a
                href="#"
                target="_blank"
                className="student__portfolioLinkPointer"
              >
                <img
                  src={poitner}
                  className="student__pointerLink"
                  alt="стрелка"
                />
              </a>
            </div>
            <div className="student__linkBlockUnderline"></div>
          </li>
          <li className="student__linkBlock">
            <div className="studetn__link">
              <a
                href="#"
                target="_blank"
                className="student__portfolioLinkText"
              >
                Адаптивный сайт
              </a>
              <a
                href="#"
                target="_blank"
                className="student__portfolioLinkPointer"
              >
                <img
                  src={poitner}
                  className="student__pointerLink"
                  alt="стрелка"
                />
              </a>
            </div>
            <div className="student__linkBlockUnderline"></div>
          </li>
          <li className="student__linkBlock">
            <div className="studetn__link">
              <a
                href="#"
                target="_blank"
                className="student__portfolioLinkText"
              >
                Одностраничное приложение
              </a>
              <a
                href="#"
                target="_blank"
                className="student__portfolioLinkPointer"
              >
                <img
                  src={poitner}
                  className="student__pointerLink"
                  alt="стрелка"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Student;
