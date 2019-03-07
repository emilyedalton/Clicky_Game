import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
// import shuffle from "shuffle-array";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    score: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   // const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array





  //   friends.sort(() => Math.random() - 0.5);

  //   this.setState({ friends, score:   this.state.score +1 });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object

    //    // Filter this.state.friends for friends with an id not equal to the id being removed
    //    const friends = this.state.friends.filter(friend => friend.id !== id);
    //    // Set this.state.friends equal to the new friends array
    //    this.setState({ friends });
    //  };
    removeFriend = id => {
 
      // Emily, iterates each element in the array of objects called friends which is a json file 
     friends.map(friend => {
        //if the friend we're on matches the id that we're looking for
        // alert(id +" --- " +friend.id );
        //Emily. this check the json friend.id against the userclick id and look for friend.clicked equals 0
        if (friend.id === id && friend.clicked === 0) {
          friend.clicked=1;
          this.setState({ friends: friends, score: this.state.score + 1, topscore: this.state.topscore + 1 });
          return true; //Emily. since this is using a map function, it needs a return of boolean
                       //This statement is true since it found the click id that matches our json friend id
                       // and has the clicked to 0
        } else if (friend.id === id && friend.clicked === 1) {
   
           //Emily, if this doesn't match ,we reset score 0 return false
         this.setState({   score: 0 });
         return false;
        }
  
         //Emily, if and else if doesn't execute, the below code is the default to false
        return false;
      });
  
      //Emily. this shuffle the images
       friends.sort(() => Math.random() - 0.5);
    }

    
    //Emily. this shuffle the images


  render() {
    return (
      <Wrapper>
        <Title>Friends List score: {this.state.score} {this.state.topscore}  </Title>
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
    );
  }
}

export default App;