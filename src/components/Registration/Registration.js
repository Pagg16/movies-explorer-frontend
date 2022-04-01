import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Registration.css";

function Registration(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const buttonActive =
    isValid.inputOne && isValid.inputTwo && isValid.inputThree;

  const navigation = useNavigate();

  function goSignin() {
    navigation("/signin");
  }

  function handleChangeInput(e) {
    setErrorMessageActive(false);
    handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props
      .register(values.inputOne, values.inputTwo, values.inputThree)
      .then((res) => {
        setErrorMessageActive(false);
        props
          .login(values.inputTwo, values.inputThree)
          .then((res) => {
            localStorage.setItem("jwt", res.token);
            props.verification();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setErrorMessageActive(true);
        console.log(err);
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
          <span
            className={`registration__inputError ${isValid.inputOne ? "" : ""}`}
          >
            {errors.inputOne}
          </span>
          <label className="registration__label">E-mail</label>
          <input
            value={values.inputTwo}
            onChange={handleChangeInput}
            minLength={2}
            maxLength={100}
            type="email"
            name="inputTwo"
            autoComplete={"off"}
            required
            className="registration__input"
          />
          <span
            className={`registration__inputError ${isValid.inputTwo ? "" : ""}`}
          >
            {errors.inputTwo}
          </span>
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
          <span
            className={`registration__inputError ${
              isValid.inputThree ? "" : ""
            }`}
          >
            {errors.inputThree}
          </span>
          <span
            className={`registration__submitError ${
              errorMessageActive ? "registration__submitError_active" : ""
            }`}
          >
            При регистрации профиля произошла ошибка.
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
