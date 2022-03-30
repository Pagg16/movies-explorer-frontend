import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  const url = useLocation();

  const isSaved = props.savedMoviesArr.some(
    (elem) => elem.movieId === props.movie.id
  );

  const imageLinkPart = "https://api.nomoreparties.co/";

  const duratonHours = Math.trunc(props.movie.duration / 60);

  const duratonMinut =
    duratonHours > 0
      ? props.movie.duration - duratonHours * 60
      : props.movie.duration;

  const totalDuration =
    duratonHours > 0
      ? duratonHours + "ч " + duratonMinut + "м"
      : duratonMinut + "м";

  function savedMovies() {
    const dateMovie = {
      country: props.movie.country,
      director: props.movie.director,
      duration: props.movie.duration,
      year: props.movie.year,
      description: props.movie.description,
      image: imageLinkPart + props.movie.image.url,
      trailerLink: props.movie.trailerLink,
      nameRU: props.movie.nameRU,
      nameEN: props.movie.nameEN,
      thumbnail: imageLinkPart + props.movie.image.formats.thumbnail.url,
      movieId: props.movie.id,
    };

    if (dateMovie.country === null) {
      dateMovie.country = "noCountry";
    }

    if (dateMovie.nameEN === "") {
      dateMovie.nameEN = "noName";
    }

    props.moviesSaved(dateMovie);
  }

  function removeMovies() {
    console.log(props.movie);
    props.removeMovies(props.movie._id);
  }

  return (
    <div className="moviesCard__collectionElem">
      {url.pathname === "/movies" ? (
        <>
          <button
            type="button"
            className={`moviesCard__saveElemButton ${
              isSaved ? "moviesCard__saveElemButton_saved" : ""
            }`}
            onClick={savedMovies}
          >
            {isSaved ? "" : "Сохранить"}
          </button>
        </>
      ) : (
        <button
          type="button"
          className="moviesCard__alreadySaveElemButton"
          onClick={removeMovies}
        />
      )}
      <a
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="moviesCard__linkMovie"
      >
        <img
          alt={props.movie.nameRU}
          className="moviesCard__elemCover"
          src={
            url.pathname === "/movies"
              ? imageLinkPart + props.movie.image.url
              : props.movie.image
          }
        />
      </a>
      <div className="moviesCard__elemTextBlock">
        <p className="moviesCard__elemText">{props.movie.nameRU}</p>
        <p className="moviesCard__elemDuration">{totalDuration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
