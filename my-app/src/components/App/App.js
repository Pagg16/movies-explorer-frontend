import React from "react";
import { Routes, Route } from "react-router-dom";
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

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/signup" element={<Registration />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/profile" element={<Profile />} />

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
              <Footer />
            </>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
