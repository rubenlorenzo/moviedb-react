import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key } from "../../env.js";
import { Container, Jumbotron } from "react-bootstrap";
import "./Movie.scss";

function Movie(props) {
  const movieId = props.match.params.movieId;
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=es-ES`
      )
      .then((res) => {
        setMovie(res.data);
        setGenres(res.data.genres);
      })
      .catch(console.error);
  }, [movieId]);

  return (
    <Jumbotron>
      <Container>
        <div id="cover">
          <div id="poster">
            <img
              src={
                "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
                movie.poster_path
              }
              alt={"Poster"}
              width="300em"
            />
          </div>
          <div id="title">
            <h1>{movie.title}</h1>
            <h4>
              {movie.original_title} - {movie.release_date}
            </h4>
            <span>Puntuación: {movie.vote_average}</span>
            <span>Generos:</span>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <p id="description">{movie.overview}</p>
      </Container>
    </Jumbotron>
  );
}

export default Movie;
