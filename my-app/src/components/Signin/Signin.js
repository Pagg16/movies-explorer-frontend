import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div className="signin">
      <div className="signin__formBlock">
        <p className="signin__tittle">Рады видеть!</p>
        <form className="signin__form" noValidate>
          <label className="signin__label">E-mail</label>
          <input
            minlength="2"
            maxlength="30"
            type="email"
            name="email"
            autocomplete="off"
            required
            className="signin__input"
            placeholder="pochta@yandex.ru"
          />
          <span class="signin__inputError"></span>
          <label className="signin__label">Пароль</label>
          <input
            minlength="2"
            maxlength="30"
            type="text"
            name="password"
            autocomplete="off"
            required
            className="signin__input"
          />
          <span class="signin__inputError"></span>
        </form>
        <button type="button" className="signin__formButton">
          Войти
        </button>
        <div className="signin__inputBlock">
          <p className="signin__inputText">Ещё не зарегистрированы?</p>
          <button type="button" className="signin__inputButton">
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
