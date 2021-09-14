import React, { Component } from "react";
import Header from "./components/Header";
import Parent from './components/props-state/Parent';
import UncontrolledForm from "./components/forms/UncontrolledForm";
import ControlledForm from "./components/forms/ControlledForm";
import FweetList from "./components/FweetList";
import FweetForm from "./components/FweetForm";
import "./assets/styles/app.css";

class App extends Component {
  // creating some initial state
  state = {
    fweets: [
      {
        username: "goblin",
        fweet: "i am very loud bully who steals my brothers toys. i cannot be stopped.",
      },
      {
        username: "grampa",
        fweet: "i'm an extremely good boy who has never once done anything wrong.",
      },
    ],
  };

  // function to be added as a callback prop
  addFweet = (newFweet) => {
    this.setState((prevState) => {
      return {
        fweets: [...prevState.fweets, newFweet],
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div className="container">
          <div className="fweet-list">
            {/* <Parent /> */}

            {/* <UncontrolledForm /> */}
            {/* <ControlledForm /> */}

            {/* Passing fweets in as props */}
            <FweetList fweets={this.state.fweets} />

          </div>

          <div className="fweet-form">
            {/* Passing in addFweet as a callback function */}
            <FweetForm addFweet={this.addFweet} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
