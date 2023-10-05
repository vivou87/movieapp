import React from "react";
import "./style.css";
import MovieItem from "./MovieItem";

function MoviesList(props) {
  return (
    <div className="movies-list">
      <h1>MoviesList</h1>
      <div className="movies">
        {props.movies
          .filter((movie) => {
            return movie.title
              .toLowerCase()
              .includes(props.search.toLowerCase());
          })
          .filter((movie) => {
            return props.rating ? movie.rating === props.rating : movie;
          })
          .map((movie) => (
            <MovieItem
              img={movie.imgUrl}
              title={movie.title}
              rate={movie.rating}
              cast={movie.cast}
              desc={movie.desc}
            />
          ))}
      </div>
    </div>
  );
}

export default MoviesList;
