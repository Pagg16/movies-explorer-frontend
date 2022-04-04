import React from "react";
import iconSearch from "../../images/icon__search.svg";
import Preloader from "../Preloader/Preloader";

import "./SearchForm.css";

function SearchForm({
  serSearchMovies,
  setMoreMovies,
  setMoreMoviesButton,
  setDuratinShort,
  durationShort,
  searchMovies,
}) {
  const [preloaderActive, setPreloaderActive] = React.useState(false);

  React.useEffect(() => {
    setPreloaderActive(false);
    preloaderSet();
    return () => {
      setPreloaderActive(false);
    };
  }, []);

  function handleMovies(e) {
    setMoreMoviesButton(true);
    setMoreMovies(0);
    serSearchMovies(e.target.value);
    preloaderSet();
  }

  function checkbox() {
    setMoreMoviesButton(true);
    setDuratinShort(!durationShort);
    preloaderSet();
  }

  function preloaderSet() {
    if (!preloaderActive) {
      setTimeout(() => setPreloaderActive(false), 600);
      setPreloaderActive(true);
    } else {
      setPreloaderActive(true);
    }
  }

  return (
    <div className="searchForm">
      <div className="searchForm__header">
        <div className="searchForm__headerIconSearch">
          <img
            className="searchForm__icon"
            alt="иконка поиска"
            src={iconSearch}
          />
        </div>
        <input
          className="searchForm__input"
          placeholder="Фильмы"
          autoComplete="off"
          type="text"
          required
          value={searchMovies}
          onChange={handleMovies}
        />
        {preloaderActive ? (
          <Preloader />
        ) : (
          <button type="button" className="searchForm__headerButton">
            Найти
          </button>
        )}
      </div>
      <div className="searchForm__headerUnderline"></div>
      <label className="searchForm__durationBlock" htmlFor="duration">
        <input
          className="searchForm__inputDuration"
          type="checkbox"
          value="duration"
          id="duration"
          checked={durationShort}
          onChange={checkbox}
        />
        <span className="searchForm__durationCheckbox"></span>
        <span className="searchForm__subtitleDuration" htmlFor="duration">
          Короткометражки
        </span>
      </label>
    </div>
  );
}

export default SearchForm;
