import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="error">
      <p className="error__title">404</p>
      <p className="error__subtitle">Страница не найдена</p>
      <button type="button" className="error__exitButton" onClick={goBack}>
        Назад
      </button>
    </div>
  );
}

export default Error;
