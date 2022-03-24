import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <div className="moviesCard__collectionElem">
      <button type="button" className="moviesCard__saveElemButton">
        Сохранить
      </button>
      <img
        alt={props.movie.name}
        className="moviesCard__elemCover"
        src={props.movie.image}
      />
      <div className="moviesCard__elemTextBlock">
        <p className="moviesCard__elemText">{props.movie.name}</p>
        <p className="moviesCard__elemDuration">{props.movie.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
