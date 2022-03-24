import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Moremovies from "../Moremovies/Moremovies";
import { arrDemonstration } from "../../demonstrationArr/demonstrationArr";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList movies={arrDemonstration} />
      <Moremovies />
    </div>
  );
}

export default Movies;
