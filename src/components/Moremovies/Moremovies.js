import React from "react";
import "./Moremovies.css";

function Moremovies({ setMoreMovies, moreMovies, moreMoviesButton }) {
  const [width, setWidth] = React.useState(window.innerWidth);

  let howManyFilms = width >= 1280 ? 3 : 2;

  React.useEffect(() => {
    let time = true;
    function timeOut() {
      if (time === true) {
        time = false;
        setTimeout(function () {
          time = true;
          setWidth(window.innerWidth);
        }, 500);
      }
    }

    window.addEventListener("resize", timeOut);
    return () => {
      window.removeEventListener("resize", timeOut);
    };
  });

  function restMovies() {
    setMoreMovies(moreMovies + howManyFilms);
  }

  return (
    <div className="moreMovies">
      <button
        type="button"
        className={`moreMovies__button ${
          moreMoviesButton ? "" : "moreMovies__button_visibility"
        }`}
        onClick={restMovies}
      >
        Еще
      </button>
    </div>
  );
}

export default Moremovies;
