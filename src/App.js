import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import shuffle from "shuffle-array";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar"

class App extends Component {
  state = {
    friends,
    topscore: 0,
    score: 0
  };

    removeFriend = id => {
 
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
      <Navbar> <p class = "bodyz">Сцоре: {this.state.score} Топ Сцоре: {this.state.topscore}</p>   </Navbar>

      <Wrapper>

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
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