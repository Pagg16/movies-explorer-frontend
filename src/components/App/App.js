import React from "react";
import {
  Routes,
  Route,
  useState,
  useLocation,
  useNavigate,
  useHistory,
} from "react-router-dom";
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
import Errorpopup from "../Errorpopup/Errorpopup";
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

  const [searchMoviesSaved, serSearchMoviesSaved] = React.useState("");
  const [durationShortSaved, setDuratinShortSaved] = React.useState(false);

  const [errorPopupVisible, setErrorPopupVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({
    err: "",
    text: "",
  });

  const url = useLocation().pathname;

  const navigation = useNavigate();

  React.useEffect(() => {
    if (url !== "/saved-movies") {
      serSearchMoviesSaved("");
      setDuratinShortSaved(false);
    }
    return () => {
      serSearchMoviesSaved("");
      setDuratinShortSaved(false);
    };
  }, [url]);

  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      // проверяем токен пользователя
      verification();
      searchMoviesUpdate();
    }
  }, []);

  function searchMoviesUpdate() {
    if (localStorage.getItem("searchMovies")) {
      const searchMovies = localStorage.getItem("searchMovies");
      serSearchMovies(searchMovies);
    }
    if (localStorage.getItem("durationMovies")) {
      const durationMovies = JSON.parse(localStorage.getItem("durationMovies"));
      setDuratinShort(durationMovies);
    }
  }

  function userLogin(inputOne, inputTwo) {
    return new Promise((resolve, reject) => {
      login(inputOne, inputTwo)
        .then((res) => {
          localStorage.setItem("jwt", res.token);
          verification().then(() => navigation("/movies"), resolve());
        })
        .catch((err) => {
          if (err === 401) {
            popupErrorMessage({
              err: err,
              text: "Вы ввели неправильный логин или пароль",
            });
          } else {
            popupErrorMessage({
              err: err,
              text: "На сервере произошла ошибка",
            });
          }
          reject();
        });
    });
  }

  function userRegistration(inputOne, inputTwo, inputThree) {
    return new Promise((resolve, reject) => {
      register(inputOne, inputTwo, inputThree)
        .then((res) => {
          userLogin(inputTwo, inputThree).then(() => resolve());
        })
        .catch((err) => {
          if (err === 400) {
            popupErrorMessage({
              err: err,
              text: "При регистрации пользователя произошла ошибка",
            });
          } else if (err === 409) {
            popupErrorMessage({
              err: err,
              text: "Пользователь с таким email уже существует",
            });
          } else {
            popupErrorMessage({
              err: err,
              text: "На сервере произошла ошибка",
            });
          }
          reject();
        });
    });
  }

  function changeUserinform(userDate) {
    return new Promise((resolve, reject) => {
      userInformSet
        .apply(userDate)
        .then((res) => {
          resolve();
        })
        .catch((err) => {
          reject();
          if (err === 409) {
            popupErrorMessage({
              err: err,
              text: "Пользователь с данным email уже существует",
            });
          }
        });
    });
  }

  function verification() {
    return new Promise((resolve, reject) => {
      userInform(localStorage.getItem("jwt"))
        .then((res) => {
          if (res) {
            insideDate();
            downloadMovies();
            downloadMoviesSaved();
            setCurrentUser(res);
            resolve();
          }
        })
        .catch((err) => {
          if (err === 400) {
            popupErrorMessage({
              err: err,
              text: "При авторизации произошла ошибка. Переданный токен некорректен",
            });
          } else if (err === 401) {
            popupErrorMessage({
              err: err,
              text: `При авторизации произошла ошибка.
              Токен не передан или передан не в том формате`,
            });
          } else if (err === 404) {
            popupErrorMessage({
              err: err,
              text: `Страница по указанному маршруту не найдена`,
            });
          } else {
            popupErrorMessage({
              err: err,
              text: `На сервере произошла ошибка`,
            });
          }
          reject();
        });
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
        popupErrorMessage({
          err: err,
          text: "При загрузке фильмов произошла ошибка",
        });
      });
  }

  function downloadMoviesSaved() {
    downloadSavedMovies()
      .then((res) => {
        setSavedMoviesArr(res);
      })
      .catch((err) => {
        popupErrorMessage({
          err: err,
          text: "При загрузке сохраненных фильмов произошла ошибка",
        });
      });
  }

  function moviesSaved(data) {
    return new Promise((resolve, reject) => {
      savedMovies(data)
        .then((movie) => {
          setSavedMoviesArr([movie, ...savedMoviesArr]);
          resolve();
        })
        .catch((err) => {
          reject();
          popupErrorMessage({
            err: err,
            text: "При сохранении фильма произошла ошибка",
          });
        });
    });
  }

  function removeMovies(id) {
    return new Promise((resolve, reject) => {
      deleteMovies(id)
        .then((res) => {
          setSavedMoviesArr(() =>
            savedMoviesArr.filter((elem) => elem._id !== id)
          );
          resolve();
        })
        .catch((err) => {
          reject();
          popupErrorMessage({
            err: err,
            text: "При удалении фильма произошла ошибка",
          });
        });
    });
  }

  function popupErrorMessage(errMessage) {
    setErrorMessage(errMessage);
    setErrorPopupVisible(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`app ${errorPopupVisible ? "app_error" : ""}`}>
        <Header loggedIn={loggedIn} />
        <main className="app__content">
          {errorPopupVisible && (
            <Errorpopup
              errorMessage={errorMessage}
              setErrorPopupVisible={setErrorPopupVisible}
            />
          )}
          <Routes>
            <Route
              path="/signup"
              element={
                <Registration
                  register={register}
                  login={login}
                  insideDate={insideDate}
                  downloadMovies={downloadMovies}
                  downloadMoviesSaved={downloadMoviesSaved}
                  verification={verification}
                  userRegistration={userRegistration}
                  userLogin={userLogin}
                />
              }
            />

            <Route
              path="/signin"
              element={
                <Login
                  login={login}
                  verification={verification}
                  userLogin={userLogin}
                  navigation={navigation}
                />
              }
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
                  removeMovies={removeMovies}
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
                  searchMovies={searchMoviesSaved}
                  serSearchMovies={serSearchMoviesSaved}
                  setMoreMoviesButton={setMoreMoviesButton}
                  moreMoviesButton={moreMoviesButton}
                  setDuratinShort={setDuratinShortSaved}
                  durationShort={durationShortSaved}
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
                  changeUserinform={changeUserinform}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
