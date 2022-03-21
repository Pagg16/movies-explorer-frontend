import React from "react";
import logo from "../../images/logo_header.svg"
import "./Header.css"

function Header() {
  return (
<header className="header">
  <img src={logo} alt="логотип" className="header__logo"/>
  <div className="header__path">
  <a className="header__registerText">Регистрация</a>
  <button className="header__signinButton" type="button">Войти</button>
  </div>
</header>
  );
}

export default Header;
