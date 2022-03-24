import React from "react";
import iconSearch from "../../images/icon__search.svg";
import "./SearchForm.css";

function SearchForm() {
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
          autocomplete="off"
          type="text"
          required
        />
        <button type="button" className="searchForm__headerButton">
          Найти
        </button>
      </div>
      <div className="searchForm__headerUnderline"></div>
      <label className="searchForm__durationBlock" for="duration">
        <input
          className="searchForm__inputDuration"
          type="checkbox"
          value="duration"
          id="duration"
        />
        <span className="searchForm__durationCheckbox"></span>
        <span className="searchForm__subtitleDuration" for="duration">
          Короткометражки
        </span>
      </label>
    </div>
  );
}

export default SearchForm;
