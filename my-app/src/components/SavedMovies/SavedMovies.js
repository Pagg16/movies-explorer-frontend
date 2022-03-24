import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { arrSaved } from "../../demonstrationArr/demonstrationArr";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <div className="savedMovies">
      <SearchForm />
      <MoviesCardList movies={arrSaved} />
    </div>
  );
}

export default SavedMovies;
