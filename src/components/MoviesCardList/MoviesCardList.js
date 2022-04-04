import React from "react";
import "./MoviesCardList.css";
import { textFiltering } from "../../utils/regular";
import "../App/App.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  moviesArr,
  moreMovies,
  searchMovies,
  setMoreMoviesButton,
  durationShort,
  moviesSaved,
  savedMoviesArr,
  removeMovies,
}) {
  const url = useLocation();

  const [width, setWidth] = React.useState(window.innerWidth);

  const [nothingFound, setNothingFound] = React.useState(false);

  const amountMovies = [];
  const searchFormMovies = [];
  const durationSortMovies = [];

  const howManyFilms = React.useCallback(() => {
    if (width >= 1245) {
      return 12 + moreMovies;
    } else if (width >= 674) {
      return 8 + moreMovies;
    } else {
      return 5 + moreMovies;
    }
  }, [width, moreMovies]);

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

  function searchMoviesLength(data) {
    for (let m = 0; m < data.length; m++) {
      if (data[m].duration <= 50) {
        durationSortMovies[durationSortMovies.length] = data[m];
      }
    }
  }

  function searchMoviesName(transformativeSearchMovies) {
    for (let i = 0; i < moviesArr.length; i++) {
      let сharacters = textQueryProcessing(moviesArr[i].nameRU);

      for (
        let d = 0;
        d < сharacters.length - transformativeSearchMovies.length + 1;
        d++
      ) {
        let strin = "";

        for (let a = 0; a < transformativeSearchMovies.length; a++) {
          strin += сharacters[a + d];
        }

        if (transformativeSearchMovies === strin) {
          searchFormMovies[searchFormMovies.length] = moviesArr[i];
          break;
        }
      }
    }
  }

  function basicArrMovies(data, howMany) {
    for (let i = 0; i < howMany(); i++) {
      amountMovies[amountMovies.length] = data[i];
    }
  }

  function textQueryProcessing(text) {
    let name = text;

    return name.replace(textFiltering, "").toLowerCase();
  }

  function howManyRendersSearch(data) {
    if (data.length <= howManyFilms() && data.length !== 0) {
      return data.length;
    } else if (data.length > howManyFilms()) {
      return howManyFilms();
    } else {
      return 0;
    }
  }

  if (searchMovies === "" && !durationShort) {
    basicArrMovies(moviesArr, () => howManyRendersSearch(moviesArr));
  } else if (searchMovies !== "" && !durationShort) {
    let transformativeSearchMovies = textQueryProcessing(searchMovies);

    searchMoviesName(transformativeSearchMovies);

    basicArrMovies(searchFormMovies, () =>
      howManyRendersSearch(searchFormMovies)
    );
  } else if (searchMovies === "" && durationShort) {
    searchMoviesLength(moviesArr);
    basicArrMovies(durationSortMovies, () =>
      howManyRendersSearch(durationSortMovies)
    );
  } else {
    let transformativeSearchMovies = textQueryProcessing(searchMovies);

    searchMoviesName(transformativeSearchMovies);

    searchMoviesLength(searchFormMovies);

    basicArrMovies(durationSortMovies, () =>
      howManyRendersSearch(durationSortMovies)
    );
  }

  React.useEffect(() => {
    if (searchMovies === "" && !durationShort) {
      if (amountMovies.length === moviesArr.length || moviesArr.length === 0) {
        setNothingFound(false);
        setMoreMoviesButton(false);
      } else {
        setMoreMoviesButton(true);
      }
    } else if (searchMovies !== "" && !durationShort) {
      if (
        amountMovies.length === searchFormMovies.length ||
        searchFormMovies.length === 0
      ) {
        setMoreMoviesButton(false);
        if (searchFormMovies.length === 0) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
      }
    } else if (searchMovies === "" && durationShort) {
      if (
        amountMovies.length === durationSortMovies.length ||
        durationSortMovies.length === 0
      ) {
        setMoreMoviesButton(false);
        if (durationSortMovies.length === 0) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
      }
    } else {
      if (
        amountMovies.length === durationSortMovies.length ||
        durationSortMovies.length === 0
      ) {
        setMoreMoviesButton(false);
        if (durationSortMovies.length === 0) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
      }
    }
  }, [
    setMoreMoviesButton,
    howManyFilms,
    searchFormMovies,
    moreMovies,
    searchMovies,
    amountMovies,
    durationShort,
    durationSortMovies,
    moviesArr,
    url.pathname,
  ]);

  return (
    <div className="moviesCardList">
      {amountMovies.map((movie) => {
        const movieId = url.pathname === "/movies" ? movie.id : movie.movieId;
        return (
          <MoviesCard
            movie={movie}
            key={movieId}
            moviesSaved={moviesSaved}
            savedMoviesArr={savedMoviesArr}
            removeMovies={removeMovies}
          />
        );
      })}
      {nothingFound && (
        <p className="moviesCardLis__nothingFound">Ничего не найдено</p>
      )}
    </div>
  );
}

export default MoviesCardList;
