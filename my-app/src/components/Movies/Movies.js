import React from "react";
import iconSearch from "../../images/iconSearch.png";
import movies1 from "../../images/movies1.png";
import movies2 from "../../images/movies2.png";
import movies3 from "../../images/movies3.png";
import movies4 from "../../images/movies4.png";
import movies5 from "../../images/movies5.png";
import movies6 from "../../images/movies6.png";
import movies7 from "../../images/movies7.png";
import movies8 from "../../images/movies8.png";
import movies9 from "../../images/movies9.png";
import movies10 from "../../images/movies10.png";
import movies11 from "../../images/movies11.png";
import movies12 from "../../images/movies12.png";

import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <div className="movies__header">
        <img
          className="movies__headerIconSearch"
          alt="иконка поиска"
          src={iconSearch}
        />
        <h4 className="movies__headerText">Фильм</h4>
        <button type="button" className="movies__headerButton">
          Найти
        </button>
      </div>
      <div className="movies__headerUnderline"></div>
      <div className="movies__subtitleBlock">
        <div className="movies__subtitleSphero"></div>
        <p className="movies__subtitle">Короткометражки</p>
      </div>
      <div className="movies__clollection">
        <div className="movies__collectionElem">
          <button type="button" className="movies__saveElemButton">Сохранить</button>
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies1}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">33 слова о дизайне</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <button type="button" className="movies__elemButton"></button>
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies2}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">Киноальманах «100 лет дизайна»</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies3}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">В погоне за Бенкси</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies4}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">Баския: Взрыв реальности</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies5}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">Бег это свобода</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        {/* <div className="movies__collectionElem">
          <button type="button" className="movies__elemButton"></button>
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies6}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">Книготорговцы</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div> */}
        {/* <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies7}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">Когда я думаю о Германии ночью</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies8}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">
              Gimme Danger: История Игги и The Stooges
            </p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div> */}
        {/* <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies9}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">
              Дженис: Маленькая девочка грустит
            </p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies10}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">Соберись перед прыжком</p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies11}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">
              Пи Джей Харви: A dog called money
            </p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div>
        <div className="movies__collectionElem">
          <img
            alt="обложка фильма"
            className="movies__elemCover"
            src={movies12}
          />
          <div className="movies__elemTextBlock">
            <p className="movies__elemText">
              По волнам: Искусство звука в кино
            </p>
            <p className="movies__elemDuration">1ч 17м</p>
          </div>
        </div> */}
      </div>
      <button type="button" className="movies__moreButton">
        Еще
      </button>
    </div>
  );
}

export default Movies;
