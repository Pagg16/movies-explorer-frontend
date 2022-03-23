import "./MoviesCardList.css";
import "../App/App.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <div className="moviesCardList">
      {movies.map((movie) => {
        return <MoviesCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default MoviesCardList;
