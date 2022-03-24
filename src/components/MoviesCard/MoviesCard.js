import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const [savedOrAlready, setSavedOrAlready] = useState(true);

  const url = useLocation();

  return (
    <div className="moviesCard__collectionElem">
      {url.pathname === "/movies" ? (
        <>
          {savedOrAlready ? (
            <button type="button" className="moviesCard__saveElemButton">
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className="moviesCard__alreadySaveElemButton"
            />
          )}
        </>
      ) : (
        <button
          type="button"
          className="moviesCard__alreadySaveElemButton moviesCard__alreadySaveElemButton_delite"
        />
      )}
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
