import React, { Component } from "react";
import Card from "./components/cards";
import Wrapper from "./components/wrapper";
import Score from "./components/score";
import Fruit from "./cards.json";
import "./App.css";

class App extends Component {
// Set state of our cards, which card has been clicked, the users score, and the goal to reach
  state = {
    Fruit,
    clickedFruit: [],
    score: 0,
    goal: 8,
    message: ''
  };
// Shuffle all cards when clicked
  Shuffle = id => {
    let clickedFruit = this.state.clickedFruit;
// If user clicks on a card twice then the game is over
    if(clickedFruit.includes(id)){
      this.setState({ clickedFruit: [], message: 'You Lose, Click to Play Again',score: 0});
      console.log('You Lose')
      return;
// If user gets all 8 cards, they win
    }else{ 
      clickedFruit.push(id)
      if(clickedFruit.length === 8){
        this.setState({score: 8, message: 'W0W You actually Won',clickedFruit: []});
        console.log('You Win');
        return;
      }
      this.setState({ Fruit, clickedFruit, score: clickedFruit.length, message: ''});
// Loop to shuffle all the cards around
      for (let i = Fruit.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Fruit[i], Fruit[j]] = [Fruit[j], Fruit[i]];
      }
    }
  }
  render() {
    return (
      <div className="Clicky">
        <div className="Jumbotron">
        <Score total={this.state.score}
               goal={8}
               message={this.state.message}
               />
        <Wrapper>
          {this.state.Fruit.map(fruit => (
            <Card
              Shuffle={this.Shuffle}
              id={fruit.id}
              key={fruit.id}
              image={fruit.image}
            />
          ))}
        </Wrapper>
        </div>
    </div>
    );
  }
}

export default App;
