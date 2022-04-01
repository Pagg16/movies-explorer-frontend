import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Moremovies from "../Moremovies/Moremovies";
import "./SavedMovies.css";

function SavedMovies({
  moreMovies,
  setMoreMovies,
  searchMovies,
  serSearchMovies,
  setMoreMoviesButton,
  moreMoviesButton,
  setDuratinShort,
  durationShort,
  savedMoviesArr,
  removeMovies,
}) {

  return (
    <div className="savedMovies">
      <SearchForm
        serSearchMovies={serSearchMovies}
        setMoreMovies={setMoreMovies}
        setMoreMoviesButton={setMoreMoviesButton}
        setDuratinShort={setDuratinShort}
        durationShort={durationShort}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        searchMovies={searchMovies}
        moreMovies={moreMovies}
        setMoreMoviesButton={setMoreMoviesButton}
        serSearchMovies={serSearchMovies}
        durationShort={durationShort}
        moviesArr={savedMoviesArr}
        savedMoviesArr={savedMoviesArr}
        removeMovies={removeMovies}
      />
      <Moremovies
        setMoreMovies={setMoreMovies}
        moreMovies={moreMovies}
        moreMoviesButton={moreMoviesButton}
      />
    </div>
  );
}

export default SavedMovies;
