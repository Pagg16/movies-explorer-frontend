import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const url = useLocation();

  return (
    <>
      {(url.pathname === "/" ||
        url.pathname === "/movies" ||
        url.pathname === "/saved-movies") && (
        <div className="footer">
          <h3 className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h3>
          <div className="footer__linkBlockUnderline"></div>
          <div className="footer__information">
            <p className="footer__informDate">&copy; 2022</p>
            <ul className="footer__linkInform">
              <li className="footer__linkElem">
                <a href="#" target="_blank" className="footer__linkInformText">
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__linkElem">
                <a href="#" target="_blank" className="footer__linkInformText">
                  Github
                </a>
              </li>
              <li className="footer__linkElem">
                <a href="#" target="_blank" className="footer__linkInformText">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
