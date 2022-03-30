import React from "react";
import { Routes, Route, useState } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Error from "../Error/Error";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Technology from "../Technology/Technology";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Registration from "../Registration/Registration";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import {
  register,
  login,
  userInform,
  userInformSet,
  savedMovies,
  downloadSavedMovies,
  deleteMovies,
} from "../../utils/MainApi";
import { moviesLoad } from "../../utils/MoviesApi";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [moviesArr, setMoviesArr] = React.useState({});
  const [moreMovies, setMoreMovies] = React.useState(0);
  const [searchMovies, serSearchMovies] = React.useState("");
  const [moreMoviesButton, setMoreMoviesButton] = React.useState(true);
  const [durationShort, setDuratinShort] = React.useState(false);
  const [savedMoviesArr, setSavedMoviesArr] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      // проверяем токен пользователя
      verification();
    }
  }, []);

  function verification() {
    userInform(localStorage.getItem("jwt"))
      .then((res) => {
        if (res) {
          insideDate();
          setCurrentUser(res);
          downloadMovies();
          downloadMoviesSaved();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function insideDate() {
    setLoggedIn(true);
  }

  function downloadMovies() {
    moviesLoad()
      .then((res) => {
        setMoviesArr(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function downloadMoviesSaved() {
    downloadSavedMovies()
      .then((res) => {
        setSavedMoviesArr(res);
      })
      .catch((err) => console.log(err));
  }

  function moviesSaved(data) {
    savedMovies(data)
      .then((movie) => {
        setSavedMoviesArr([movie, ...savedMoviesArr]);
      })
      .catch((err) => console.log(err));
  }

  function removeMovies(id) {
    deleteMovies(id)
      .then((res) => {
        setSavedMoviesArr(() =>
          savedMoviesArr.filter((elem) => elem._id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route
            path="/signup"
            element={
              <Registration
                register={register}
                login={login}
                insideDate={insideDate}
              />
            }
          />

          <Route
            path="/signin"
            element={<Login login={login} insideDate={insideDate} />}
          />

          <Route
            exact
            path="/"
            element={
              <>
                <Promo />
                <AboutProject />
                <Technology />
                <AboutMe />
                <Portfolio />
              </>
            }
          />

          <Route path="*" element={<Error />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Movies}
                moviesArr={moviesArr}
                moreMovies={moreMovies}
                setMoreMovies={setMoreMovies}
                searchMovies={searchMovies}
                serSearchMovies={serSearchMovies}
                setMoreMoviesButton={setMoreMoviesButton}
                moreMoviesButton={moreMoviesButton}
                setDuratinShort={setDuratinShort}
                durationShort={durationShort}
                moviesSaved={moviesSaved}
                savedMoviesArr={savedMoviesArr}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={SavedMovies}
                moreMovies={moreMovies}
                setMoreMovies={setMoreMovies}
                searchMovies={searchMovies}
                serSearchMovies={serSearchMovies}
                setMoreMoviesButton={setMoreMoviesButton}
                moreMoviesButton={moreMoviesButton}
                setDuratinShort={setDuratinShort}
                durationShort={durationShort}
                savedMoviesArr={savedMoviesArr}
                removeMovies={removeMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Profile}
                userInformSet={userInformSet}
                setLoggedIn={setLoggedIn}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
