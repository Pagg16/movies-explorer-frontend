import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error">
      <p className="error__title">404</p>
      <p className="error__subtitle">Страница не найдена</p>
      <button type="button" className="error__exitButton">
        Назад
      </button>
    </div>
  );
}

export default Error;
