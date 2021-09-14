import { Component } from "react";
import "../assets/styles/fweet.css";

class Fweet extends Component {
  state = {
    likes: 0,
  };

  handleClick = (e) => {
    e.target.classList.remove("far");
    e.target.classList.add("fas", "full");

    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1,
      };
    });
  };

  render() {
    const { username, fweet } = this.props.fweetObj;

    return (
      <div className="fweet-box">
        <p className="fweet-content">{fweet}</p>
        <div className="footer">
          <p>
            {this.state.likes} {" "}
            <i className="far fa-heart" onClick={this.handleClick}></i>
          </p>
          <p> @{username}</p>
        </div>
      </div>
    );
  }
}

export default Fweet;
