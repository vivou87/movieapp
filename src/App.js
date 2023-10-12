import "./App.css";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SingleMovie from "./pages/SingleMovie";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState();
  const [movies, setMovies] = useState(data);
  return (
    <div className="App">
      {/* <MoviesList movies={movies} search={search} rating={rating} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/movies"
          element={
            <MoviesList movies={movies} search={search} rating={rating}>
              <Navbar
                setSearch={setSearch}
                setRating={setRating}
                rating={rating}
                setMovies={setMovies}
                movies={movies}
              />
            </MoviesList>
          }
        />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
