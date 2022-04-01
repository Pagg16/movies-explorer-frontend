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
  React.useEffect(() => {
      if (localStorage.getItem("searchMovies")) {
        localStorage.searchMovies = searchMovies;
      } else {
        localStorage.setItem("searchMovies", searchMovies);
      }
  }, [searchMovies]);

  React.useEffect(() => {
    if (localStorage.getItem("durationMovies")) {
      localStorage.durationMovies = JSON.stringify(durationShort);
    } else {
      localStorage.setItem("durationMovies", JSON.stringify(durationShort));
    }
  }, [durationShort]);

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
