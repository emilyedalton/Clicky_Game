import React, { Component } from "react";
import Scorecount from "./components/Scorecount";
import shuffle from "shuffle-array";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  //score = 0
  //topscore = 0
  // on click 
  // .sort(()=>Math.random()-0.5));
  state = {
    friends,
     score: 0,
  topscore: 0
  };
  handleIncrement = () => {
   
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.friends.score + 1 });
    // this.setState({ friends });

  };
  
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    shuffle(friends);  
this.setState({ friends , score: this.state.score + 1});
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
  {/* each piece of data needs to be specified in the return 
  inside of the component listed as a property. Then called as {props.whatever}in
  the component */}
              <Scorecount 
              score={this.state.score}
              link ={this.state.link}
              />

        <Title>Friends List score: {this.state.score}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            score={friend.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
