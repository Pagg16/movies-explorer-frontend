import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigation = useNavigate();

  function goSignup() {
    navigation("/signup");
  }
  return (
    <div className="login">
      <div className="login__formBlock">
        <p className="login__tittle">Рады видеть!</p>
        <form className="login__form" noValidate>
          <label className="login__label">E-mail</label>
          <input
            minlength="2"
            maxlength="30"
            type="email"
            name="email"
            autocomplete="off"
            required
            className="login__input"
            placeholder="pochta@yandex.ru"
          />
          <span class="login__inputError"></span>
          <label className="login__label">Пароль</label>
          <input
            minlength="2"
            maxlength="30"
            type="text"
            name="password"
            autocomplete="off"
            required
            className="login__input"
          />
          <span class="login__inputError"></span>
        </form>
        <button type="button" className="login__formButton">
          Войти
        </button>
        <div className="login__inputBlock">
          <p className="login__inputText">Ещё не зарегистрированы?</p>
          <button
            type="button"
            className="login__inputButton"
            onClick={goSignup}
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
