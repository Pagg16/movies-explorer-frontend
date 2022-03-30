import React from "react";
import logo from "../../images/logo_header.svg";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navigation = useNavigate();
  const url = useLocation();

  const headerIcon = (
    <img
      src={logo}
      alt="логотип"
      className={`header__logo  ${isOpenMenu ? `header__logo_activeMenu` : ""}`}
      onClick={handleLogo}
    />
  );

  function handleLogo() {
    if (!isOpenMenu) {
      navigation("/");
    }
  }

  function handleSignup() {
    navigation("/signup");
  }

  function handleSignin() {
    if (props.loggedIn) {
      navigation("/movies");
    } else {
      navigation("/signin");
    }
  }

  function handleAccount() {
    navigation("/profile");
  }

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      {url.pathname === "/" && (
        <header className="header">
          {headerIcon}
          <div className="header__path">
            <p className="header__registerText" onClick={handleSignup}>
              Регистрация
            </p>
            <button
              className="header__signinButton"
              type="button"
              onClick={handleSignin}
            >
              Войти
            </button>
          </div>
        </header>
      )}
      {(url.pathname === "/movies" ||
        url.pathname === "/saved-movies" ||
        url.pathname === "/profile") && (
        <>
          <header className="header">
            {headerIcon}
            <nav className="header__navigation">
              <Link
                className={`header__link ${
                  url.pathname === "/movies" ? "header__link_active" : ""
                }`}
                to="/movies"
              >
                Фильмы
              </Link>
              <Link
                className={`header__link ${
                  url.pathname === "/saved-movies" ? "header__link_active" : ""
                }`}
                to="/saved-movies"
              >
                Сохраненные фильмы
              </Link>
            </nav>
            <div className="header__account" onClick={handleAccount}>
              <p className="header__accountText">Аккаунт</p>
              <button type="button" className="header__accountButton"></button>
            </div>
            <button
              type="button"
              className={`header__popupMenu ${
                isOpenMenu ? "header__popupMenu_active" : ""
              }`}
              onClick={handleOpenMenu}
            ></button>
          </header>
          <Navigation isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </>
      )}
      {(url.pathname === "/signup" || url.pathname === "/signin") && (
        <header className="header header__single">{headerIcon}</header>
      )}
    </>
  );
}

export default Header;
