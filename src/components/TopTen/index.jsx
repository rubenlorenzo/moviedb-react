import React, { useState, useEffect } from 'react';
import ItemMovie from "../ItemMovie";
import axios from "axios";
import { api_key } from "../../env.js";
import "./TopTen.scss";

function TopTen(props){
  const [movies, setMovies] = useState([]);  
  

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [movies]);

  let moviesPagination = movies.slice(0, 10);

  return(
    <div id="topTen">
      {moviesPagination.map((movie, index) => (
        <ItemMovie
          key={index}
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          description={movie.overview}
        />
      ))}
    </div>
  );
}

export default TopTen;