import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const navigation = useNavigate();

  function goSignin() {
    navigation("/signin");
  }

  return (
    <div className="registration">
      <div className="registration__formBlock">
        <p className="registration__welcome">Добро пожаловать!</p>
        <form className="registration__form" noValidate>
          <label className="registration__label">Имя</label>
          <input
            minlength="2"
            maxlength="30"
            type="text"
            name="name"
            autocomplete="off"
            required
            className="registration__input"
            placeholder="Виталий"
          />
          <span class="registration__inputError"></span>
          <label className="registration__label">E-mail</label>
          <input
            minlength="2"
            maxlength="30"
            type="email"
            name="email"
            autocomplete="off"
            required
            className="registration__input"
            placeholder="pochta@yandex.ru"
          />
          <span class="registration__inputError"></span>
          <label className="registration__label">Пароль</label>
          <input
            minlength="2"
            maxlength="30"
            type="password"
            name="password"
            required
            className="registration__input"
            placeholder="••••••••••••••"
            autocomplete="off"
          />
          <span class="registration__inputError">Что-то пошло не так...</span>
        </form>
        <button type="button" className="registration__formButton">
          Зарегистрироваться
        </button>
        <div className="registration__inputBlock">
          <p className="registration__inputText">Уже зарегистрированы?</p>
          <button
            type="button"
            className="registration__inputButton"
            onClick={goSignin}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
