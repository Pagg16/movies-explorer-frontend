import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  const url = useLocation();

  const [buttonType, setButtonType] = React.useState(false);

  const [disabledMovies, setDisabledMovies] = React.useState(false);

  const isSaved = props.savedMoviesArr.some(
    (elem) => elem.movieId === props.movie.id
  );

  const savedMovie = Object.values(props.savedMoviesArr).filter(
    (elem) => elem.movieId === props.movie.id
  )[0];

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

  React.useEffect(() => {
    if (url.pathname === "/movies") {
      setButtonType(true);
    }

    return () => setButtonType(false);
  }, [url]);

  function savedMovies() {
    setDisabledMovies(true);
    if (!isSaved) {
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
      props.moviesSaved(dateMovie).finally(() => setDisabledMovies(false));
    } else {
      removeMovies();
    }
  }

  function removeMovies() {
    setDisabledMovies(true);
    if (!isSaved) {
      props
        .removeMovies(props.movie._id)
        .finally(() => setDisabledMovies(false));
    } else {
      props
        .removeMovies(savedMovie._id)
        .finally(() => setDisabledMovies(false));
    }
  }

  return (
    <div className="moviesCard__collectionElem">
      {buttonType ? (
        <>
          <button
            type="button"
            className={`moviesCard__saveElemButton ${
              isSaved ? "moviesCard__saveElemButton_saved" : ""
            }`}
            onClick={savedMovies}
            disabled={disabledMovies}
          >
            {isSaved ? "" : "Сохранить"}
          </button>
        </>
      ) : (
        <button
          type="button"
          className="moviesCard__alreadySaveElemButton"
          onClick={removeMovies}
          disabled={disabledMovies}
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
