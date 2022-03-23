import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <p className="profile__hello">Привет, Виталий!</p>
      <div className="profile__inform">
        <div className="accoutn__informDate">
          <p className="profile__date">Имя</p>
          <p className="profile__date">Виталий</p>
        </div>
        <div className="profile__underline"></div>
        <div className="accoutn__informDate">
          <p className="profile__date">E-mail</p>
          <p className="profile__date">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="profile__buttonsBlock">
        <button type="button" className="profile__edit">
          Редактировать
        </button>
        <button type="button" className="profile__exit">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}

export default Profile;
