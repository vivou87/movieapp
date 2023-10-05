import "./App.css";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { data } from "./data";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState();
  const [movies, setMovies] = useState(data);
  return (
    <div className="App">
      <Navbar
        setSearch={setSearch}
        setRating={setRating}
        rating={rating}
        setMovies={setMovies}
        movies={movies}
      />
      <MoviesList movies={movies} search={search} rating={rating} />
    </div>
  );
}

export default App;
