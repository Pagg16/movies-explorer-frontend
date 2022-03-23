import React from "react";
import "../AboutProject/AboutProject.css";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <p className="aboutProject__headerText">Студент</p>
      <div className="aboutProject__borderBottom"></div>
      <div className="aboutMe__meInform">
        <div className="aboutMe__aboutProject">
          <p className="aboutMe__name">Павел</p>
          <p className="aboutMe__description">Фронтенд-разработчик, 22 года</p>
          <p className="aboutMe__properties">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="aboutMe__socialNetwork">
            <a href="#" target="_blank" className="aboutMe__link">
              Telegram
            </a>
            <a href="#" target="_blank" className="aboutMe__link">
              Github
            </a>
          </div>
        </div>
        <img
          src={"https://cdn1.ozone.ru/s3/multimedia-k/c1200/6074200376.jpg"}
          alt="аватар"
          className="aboutMe__avatar"
        />
      </div>
    </div>
  );
}

export default AboutMe;
