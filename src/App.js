import React, { Component } from "react";
import PaintingCard from "./components/PaintingCard";
import shuffle from "shuffle-array";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/Navbar"


class App extends Component {
  state = {
    friends,
    topscore: 0,
    score: 0
  };

   


    removePainting = id => {
 
     friends.map(friend => {

        if (friend.id === id && friend.clicked === 0) {
          friend.clicked=1;
          this.setState({ friends: friends, score: this.state.score + 1, topscore: this.state.topscore + 1 });
          return true; 
        } else if (friend.id === id && friend.clicked === 1) {
   
         this.setState({   score: 0 });
         return false;
        }
  
        return false;
      });

     
  
shuffle(friends)    }


  render() {
    return (
      <div>
      <Navbar>  <p className = "bodyz">Сцоре: {this.state.score} Топ Сцоре: {this.state.topscore} </p>  
      </ Navbar>

      <Wrapper>

        {this.state.friends.map(friend => (
          <PaintingCard
            removePainting={this.removePainting}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );

    
  }
}

export default App;