import React, { Component } from "react";
import "../assets/styles/form.css";

class FweetForm extends Component {
  state = {
    username: "",
    fweet: "",
  };

  // handleUsernameChange = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // };

  // handleFweetChange = (event) => {
  //   this.setState({
  //     fweet: event.target.value
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFweet(this.state);

    this.setState({
      username: "",
      fweet: "",
    });
  };

  render() {
    return (
      <div className="form-container">
        <h1>
          FweetFeeder &nbsp;
          <i className="fas fa-kiwi-bird"></i>
        </h1>

        <form
          onSubmit={(event) => this.handleSubmit(event)}
          className="fweet-form"
        >
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label htmlFor="fweet">Fweet:</label>
          <textarea
            name="fweet"
            rows="4"
            value={this.state.fweet}
            onChange={this.handleChange}
          />

          <button type="submit">
            Fweet it! &nbsp;
            <i className="fas fa-feather-alt"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default FweetForm;
