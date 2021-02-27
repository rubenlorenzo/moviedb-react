import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key } from "../../env.js";
import ItemMovie from "./ItemMovie";
import "./Movies.scss";

function Movies(props) {
  const movieType = props.type;
  const [movies, setMovies] = useState([]);
  let initialItem = (props.page-1)*12;
  let finalItem = props.page*12;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${api_key}`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [movieType]);

  useEffect(()=> props.calculatePages(movies) ,[movies,props])
  
  let moviesPagination = movies.slice(initialItem, finalItem);
  
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
