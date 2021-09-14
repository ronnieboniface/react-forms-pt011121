import React, { Component } from 'react';

class ControlledValidation extends Component {

  state = {
    userInput: '',
    posts: []
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.userInput === ''){
      alert('Field cannot be empty!')
      return;
    };

    if (this.state.userInput.match(/\W/)) {
      alert('No special characters!')
      return;
    }

    this.setState(prevState => {
      return {
        posts: [...prevState.posts, this.state.userInput]
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

  };

  renderPosts() {
    if (this.state.posts.length === 0) {
      return 'Sorry, there are no posts yet.';
    };

    return this.state.posts.map(post => {
      return (
        <li>{post}</li>
      );
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.userInput}
            name="userInput"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input type="submit" value="Post" />
        </form>

        {this.renderPosts()}
      </div>
    );
  };
};

export default ControlledValidation;
