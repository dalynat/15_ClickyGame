import React from "react";
import "./Card.css";

//Inside our card component we set the images
const Card = props => (
  <div className="card" id="hover">
      <img 
        alt={props.name} 
        src={props.image} 
        id={props.id}
        onClick={() => props.Shuffle(props.id)} 
        />
  </div>
);

export default Card;