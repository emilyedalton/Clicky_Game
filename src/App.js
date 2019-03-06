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
  topscore: 0,
  };

  handleIncrement = () => {
   this.setState({ friends , score: this.state.score + 1});  
   shuffle(friends)
 
  };
  
 
  // Map over this.state.friends and render a FriendCard component for each friend object

  removeFriend = id => {
 
    // Emily, iterates each element in the array of objects called friends which is a json file 
   friends.map(friend => {
      //if the friend we're on matches the id that we're looking for
      // alert(id +" --- " +friend.id );
      //checks the json friend.id against the userclick id and look for friend.clicked equals 0
      if (friend.id === id && friend.clicked === 0) {
        friend.clicked=1;
        this.setState({ friends: friends, score: this.state.score + 1, topscore: this.state.topscore + 1 });
        return true;
         // since this is using a map function, it needs a return of boolean
                     //This statement is true since it found the click id that matches our json friend id
                     // and has the clicked to 0
      } else if (friend.id === id && friend.clicked === 1) {
 
         // if this doesn't match ,we reset score 0 return false
       this.setState({   score: 0 });
       return false;
      }

       //if and else if doesn't execute, the below code is the default to false
      return false;
    });

    //Emily. this shuffle the images
shuffle(friends);

}
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
