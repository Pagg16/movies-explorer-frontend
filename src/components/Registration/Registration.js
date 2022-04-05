import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Registration.css";

function Registration(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const [successful, setSuccessful] = useState(false);

  const buttonActive =
    isValid.inputOne && isValid.inputTwo && isValid.inputThree;

  const navigation = useNavigate();

  function goSignin() {
    navigation("/signin");
  }

  function handleChangeInput(e) {
    setErrorMessageActive(false);
    handleChange(e);
    setSuccessful(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props
      .userRegistration(values.inputOne, values.inputTwo, values.inputThree)
      .then(() => {
        setErrorMessageActive(false);
        setSuccessful(true);
      })
      .catch(() => {
        setErrorMessageActive(true);
        setSuccessful(false);
      });
  }

  return (
    <div className="registration">
      <div className="registration__formBlock">
        <p className="registration__welcome">Добро пожаловать!</p>
        <form className="registration__form" onSubmit={handleSubmit} noValidate>
          <label className="registration__label">Имя</label>
          <input
            value={values.inputOne}
            onChange={handleChangeInput}
            minLength={2}
            maxLength={100}
            type="text"
            name="inputOne"
            autoComplete="off"
            required
            className="registration__input"
          />
          <span className="registration__inputError">{errors.inputOne}</span>
          <label className="registration__label">E-mail</label>
          <input
            value={values.inputTwo}
            onChange={handleChangeInput}
            minLength={2}
            maxLength={100}
            type="email"
            name="inputTwo"
            autoComplete="off"
            required
            className="registration__input"
          />
          <span className="registration__inputError">{errors.inputTwo}</span>
          <label className="registration__label">Пароль</label>
          <input
            value={values.inputThree}
            onChange={handleChangeInput}
            minLength={6}
            maxLength={100}
            type="password"
            name="inputThree"
            required
            className="registration__input"
            autoComplete="off"
          />
          <span className="registration__inputError">{errors.inputThree}</span>
          <span className="registration__submitError">
            {errorMessageActive
              ? "При регистрации профиля произошла ошибка"
              : ""}
            {successful ? "Регистрация профиля прошла успешно" : ""}
          </span>
          <button
            type="submit"
            className={`registration__formButton ${
              !buttonActive ? "registration__formButton_disabled" : ""
            } `}
            disabled={!buttonActive}
          >
            Зарегистрироваться
          </button>
        </form>
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
