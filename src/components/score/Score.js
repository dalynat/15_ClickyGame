import React from "react";
import './Score.css'
// Inside the score component we have our score and message
const Score = props => (
  <div className="gameScore">
    <h1><strong>CLICKY GAME</strong></h1>
    <h1>Your Score {props.total}</h1>
    <h2>{props.message}</h2>
  </div>
);

export default Score;