import { Component } from 'react';

class ControlledForm extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  // changes state of username
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  // changes state of email
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  // changes state of password
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  // allows change of state for any field
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username, this.state.email, this.state.password);
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  };

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          {/* The value of each input must rely on state */}
          <input type="text" value={this.state.username} onChange={this.handleChange} name="username" /> <br />

          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.handleChange} name="email" /> <br />

          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.handleChange} name="password" /> <br />

          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default ControlledForm;