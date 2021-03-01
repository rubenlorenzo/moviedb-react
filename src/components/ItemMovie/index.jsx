import React from "react";
import { Card } from "react-bootstrap";
import "./ItemMovie.scss";

function ItemMovie(props) {
  const descriptionWords = props.description.trim().split(" ");

  let shortDescription = "";
  if (descriptionWords.length > 9) {
    for (let i = 0; i < 10; i++) {
      shortDescription = shortDescription + " " + descriptionWords[i];
    }
  } else if (descriptionWords.length === 1) {
    shortDescription = "";
  } else {
    for (let i = 0; i < shortDescription.length; i++) {
      shortDescription = shortDescription + " " + descriptionWords[i];
    }
  }

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + props.image
        }
        alt="Poster"
      />

      <Card.Body>
        <Card.Title>
          <a href={"/movie/" + props.id}>{props.title}</a>
        </Card.Title>
        <Card.Text>
          {shortDescription}
          <a href={"/movie/" + props.id}> ...</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemMovie;
