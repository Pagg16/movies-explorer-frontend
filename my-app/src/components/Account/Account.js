import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="account">
      <p className="account__hello">Привет, Виталий!</p>
      <div className="account__inform">
        <div className="accoutn__informDate">
          <p className="account__date">Имя</p>
          <p className="account__date">Виталий</p>
        </div>
        <div className="account__underline"></div>
        <div className="accoutn__informDate">
          <p className="account__date">E-mail</p>
          <p className="account__date">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="account__buttonsBlock">
        <button type="button" className="account__edit">
          Редактировать
        </button>
        <button type="button" className="account__exit">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}

export default Account;
