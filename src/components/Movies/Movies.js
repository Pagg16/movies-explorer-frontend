import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Moremovies from "../Moremovies/Moremovies";
import "./Movies.css";

function Movies({
  moviesArr,
  moreMovies,
  setMoreMovies,
  searchMovies,
  serSearchMovies,
  setMoreMoviesButton,
  moreMoviesButton,
  setDuratinShort,
  durationShort,
  moviesSaved,
  savedMoviesArr,
}) {
  return (
    <div className="movies">
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
        moviesArr={moviesArr}
        moreMovies={moreMovies}
        setMoreMoviesButton={setMoreMoviesButton}
        serSearchMovies={serSearchMovies}
        durationShort={durationShort}
        moviesSaved={moviesSaved}
        savedMoviesArr={savedMoviesArr}
      />
      <Moremovies
        setMoreMovies={setMoreMovies}
        moreMovies={moreMovies}
        moreMoviesButton={moreMoviesButton}
      />
    </div>
  );
}

export default Movies;
