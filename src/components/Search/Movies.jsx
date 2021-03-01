import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key } from "../../env.js";
import ItemMovie from "../ItemMovie";
import "./Movies.scss";

function Movies(props) {
  const query = props.query;
  const page = props.page;
  const [movies, setMovies] = useState([]);
  let initialItem = (page - 1) * 12;
  let finalItem = page * 12;

  useEffect(() => {
    results();
  }, []);

  useEffect(() => props.calculatePages(movies), [movies, props]);

  let moviesPagination = movies.slice(initialItem, finalItem);

  return (
    <div id="movies">
      <div>
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
    </div>
  );

  async function results() {
    let response = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=es-ES&include_adult=false`
    );

    let totalPages = response.data.total_pages;

    if (totalPages > 3) {
      totalPages = 3;
    }

    let results = [];
    for (let i = 1; i <= totalPages; i++) {
      let res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=es-ES&page=${i}&include_adult=false`
      );

      results = results.concat(res.data.results);
    }

    setMovies(results);
  }
}

export default Movies;
