import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { func } from "prop-types";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    // fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setLoading(false);
    //     setMovies(json.data.movies);
    //   });\
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              <li>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
