import React from "react";
import iconSearch from "../../images/icon__search.svg";
import "./SearchForm.css";

function SearchForm({
  serSearchMovies,
  setMoreMovies,
  setMoreMoviesButton,
  setDuratinShort,
  durationShort,
  searchMovies,
}) {
  function handleMovies(e) {
    setMoreMoviesButton(true);
    setMoreMovies(0);
    serSearchMovies(e.target.value);
  }

  function checkbox() {
    setMoreMoviesButton(true);
    setDuratinShort(!durationShort);
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
        <button type="button" className="searchForm__headerButton">
          Найти
        </button>
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
