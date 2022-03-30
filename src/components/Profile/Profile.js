import { React, useEffect, useState, useContext } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
  const navigation = useNavigate();

  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();

  const [dataUser, setDataUser] = useState(useContext(CurrentUserContext));

  const [errorMessageActive, setErrorMessageActive] = useState(false);
  const [errorNoProfileDateChanges, setErrorNoProfileDateChanges] =
    useState(false);

  useEffect(() => {
    setValues({
      inputOne: dataUser.name,
      inputTwo: dataUser.email,
    });
    setIsValid({ inputOne: true, inputTwo: true });
  }, [dataUser, setValues, setIsValid]);

  function saveNewUserInfo() {
    if (
      dataUser.name === values.inputOne &&
      dataUser.email === values.inputTwo
    ) {
      setErrorNoProfileDateChanges(true);
    } else {
      const newUserDate = { name: values.inputOne, email: values.inputTwo };
      props
        .userInformSet(newUserDate)
        .then((res) => {
          setDataUser(newUserDate);
          setErrorMessageActive(false);
        })
        .catch((err) => {
          setErrorMessageActive(true);
          console.log(err);
        });
    }
  }

  function handleChangeInput(e) {
    setErrorNoProfileDateChanges(false);
    setErrorMessageActive(false);
    handleChange(e);
  }

  function singOut() {
    props.setLoggedIn(false);
    localStorage.removeItem("jwt");
    navigation("/");
  }

  return (
    <div className="profile">
      <p className="profile__hello">Привет, {dataUser.name}!</p>
      <div className="profile__inform">
        <span
          className={`profile__inputError ${
            isValid.inputOne ? "" : "profile__inputError_active"
          } `}
        >
          {errors.inputOne}
        </span>
        <div className="accoutn__informDate">
          <p className="profile__date">Имя</p>
          <input
            className="profile__date profile__date_input"
            type="name"
            name="inputOne"
            value={values.inputOne}
            onChange={handleChangeInput}
            minLength={2}
            maxLength={40}
            autoComplete="off"
            required
          />
        </div>
        <div className="profile__underline"></div>
        <div className="accoutn__informDate">
          <p className="profile__date">E-mail</p>
          <input
            className="profile__date profile__date_input"
            type="email"
            name="inputTwo"
            value={values.inputTwo}
            onChange={handleChangeInput}
            minLength={2}
            maxLength={40}
            autoComplete="off"
            required
          />
        </div>
        <span
          className={`profile__inputError ${
            isValid.inputTwo ? "" : "profile__inputError_active"
          } `}
        >
          {errors.inputTwo}
        </span>
      </div>
      <div className="profile__buttonsBlock">
        <span
          className={`profile__submitError ${
            errorMessageActive || errorNoProfileDateChanges
              ? "profile__submitError_active"
              : ""
          }`}
        >
          {`${
            errorMessageActive
              ? "При редактировании профиля произошла ошибка."
              : ""
          } ${
            errorNoProfileDateChanges ? "Данные профиля не были изменены" : ""
          }`}
        </span>
        <button
          type="button"
          className="profile__edit"
          onMouseDown={saveNewUserInfo}
          disabled={!isValid.inputOne || !isValid.inputTwo}
        >
          Редактировать
        </button>
        <button type="button" className="profile__exit" onClick={singOut}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}

export default Profile;
