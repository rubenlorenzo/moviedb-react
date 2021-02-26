import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key } from "../../env.js";
import ItemMovie from "./ItemMovie";
import "./Movies.scss";

function Movies() {
  const movieType = "popular";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${api_key}`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [movieType]);

  let moviesPagination = movies.slice(0, 12);

  return (
    <div id="movies">
      {moviesPagination.map((movie, index) => (
        <ItemMovie
          key={index}
          image={movie.poster_path}
          title={movie.title}
          description={movie.overview}
        />
      ))}
    </div>
  );
}

export default Movies;
