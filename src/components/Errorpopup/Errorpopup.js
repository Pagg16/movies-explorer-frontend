import React from "react";
import "./Errorpopup.css";

function Errorpopup(props) {
  function closeErrorPopup() {
    props.setErrorPopupVisible(false);
  }

  return (
    <div className="errorPopup">
      <div className="errorPopup__block">
        <div
          className="errorPopup__closeButton"
          onClick={closeErrorPopup}
        ></div>
        <p className="errorPupup__number">{props.errorMessage.err}</p>
        <p className="errorPopup__errorText">{props.errorMessage.text}</p>
      </div>
    </div>
  );
}

export default Errorpopup;
