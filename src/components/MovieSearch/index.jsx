import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=403abbfe`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie Search Engine</h1>
      <input
        className={styles.inputQuery}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a movie"
      />
      <button className="btnSearch" onClick={searchMovies}>
        Search
      </button>
      <div className={styles.moviesContainer}>
        {movies &&
          movies.map((movie) => (
            <div className={styles.movieCard} key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
