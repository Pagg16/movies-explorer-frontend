import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const url = useLocation();
  const navigation = useNavigate();

  function handleAccount() {
    closePopup();
    navigation("/profile");
  }

  function closePopup() {
    props.setIsOpenMenu(!props.isOpenMenu);
  }

  return (
    <div
      className={`navigation  ${
        props.isOpenMenu === true ? "navigation_active" : ""
      }`}
    >
      <nav
        className={`navigation__menu ${
          props.isOpenMenu === true ? "navigation__menu_active" : ""
        }`}
      >
        <Link
          className={`navigation__link ${
            url.pathname === "/" ? "navigation__link_active" : ""
          }`}
          to="/"
          onClick={closePopup}
        >
          Главная
        </Link>
        <Link
          className={`navigation__link ${
            url.pathname === "/movies" ? "navigation__link_active" : ""
          }`}
          to="/movies"
          onClick={closePopup}
        >
          Фильмы
        </Link>
        <Link
          className={`navigation__link ${
            url.pathname === "/saved-movies" ? "navigation__link_active" : ""
          }`}
          to="/saved-movies"
          onClick={closePopup}
        >
          Сохранённые фильмы
        </Link>
        <div className="navigation__account" onClick={handleAccount}>
          <p className="navigation__accountText">Аккаунт</p>
          <button type="button" className="navigation__accountButton"></button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
