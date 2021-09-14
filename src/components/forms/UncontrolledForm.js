import { Component, createRef } from 'react';

class UncontrolledForm extends Component {

    username = createRef();
    email = createRef();
    password = createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // access values of refs with .current.value
    console.log(this.username.current.value, this.email.current.value, this.password.current.value)
    this.username.current.value = "";
    this.email.current.value = "";
    this.password.current.value = "";
  };

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          {/* Set refs to be equal to refs created in constructor */}
          <input type="text" ref={this.username} /> <br />

          <label>Email:</label>
          <input type="text" ref={this.email} /> <br />

          <label>Password:</label>
          <input type="password" ref={this.password} /> <br />
          
          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default UncontrolledForm;