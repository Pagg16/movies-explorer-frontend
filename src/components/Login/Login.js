import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Login.css";

function Login(props) {
  const navigation = useNavigate();

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const buttonActive = isValid.inputOne || isValid.inputTwo;

  function handleChangeInput(e) {
    setErrorMessageActive(false);
    handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props
      .userLogin(values.inputOne, values.inputTwo)
      .then(() => {
        setErrorMessageActive(false);
        setTimeout(() => navigation("/movies"), 300);
      })
      .catch(() => {
        setErrorMessageActive(true);
      });
  }

  function goSignup() {
    navigation("/signup");
  }

  return (
    <div className="login">
      <div className="login__formBlock">
        <p className="login__welcome">Рады видеть!</p>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="login__label">E-mail</label>
          <input
            value={values.inputOne}
            onChange={handleChangeInput}
            minLength={2}
            maxLength={30}
            type="email"
            name="inputOne"
            autoComplete="off"
            required
            className="login__input"
          />
          <span className="login__inputError">{errors.inputOne}</span>
          <label className="login__label">Пароль</label>
          <input
            value={values.inputTwo}
            onChange={handleChangeInput}
            minLength={6}
            maxLength={30}
            type="password"
            name="inputTwo"
            autoComplete="off"
            required
            className="login__input"
          />
          <span className="login__inputError">{errors.inputTwo}</span>
          <span
            className={`login__submitError ${
              errorMessageActive ? "login__submitError_active" : ""
            }`}
          >
            При авторизации произошла ошибка.
          </span>
          <button
            type="submit"
            className={`login__formButton ${
              !buttonActive ? "login__formButton_disabled" : ""
            } `}
            disabled={!buttonActive}
          >
            Войти
          </button>
        </form>
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
