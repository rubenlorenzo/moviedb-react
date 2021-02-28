import React from "react";
import { Card } from "react-bootstrap";
import "./ItemMovie.scss";

function ItemMovie(props) {  
  const descriptionWords = props.description.trim().split(" ");
  const imageId = props.image;
  let urlImage = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+imageId 
  let shortDescription = ""

  for(let i=0; i<10; i++){
    shortDescription = shortDescription +" "+ descriptionWords[i];
  }

  shortDescription = shortDescription+" ...";

  

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemMovie;
