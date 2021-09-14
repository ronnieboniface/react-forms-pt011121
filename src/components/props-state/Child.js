import React, { Component } from 'react';

class Child extends Component {

  // Conditional Rendering
  renderStatus() {
    if (this.props.permissionSlip === true) {
      return `I can go to the ${this.props.fieldTrip}!`;
    } else {
      return `I can't go to the ${this.props.fieldTrip}!`;
    };
  };

  // this WILL NOT WORK - props are READ ONLY
  forgeSignature = () => {
    this.props.permissionSlip = true;
  };

  render() {
    return (
      <div>
        <h3>I am the child.</h3>
        {this.renderStatus()}
        {/* 
          This does work. 
          this.props.forgeSignature is a CALLBACK PROP.
          We are invoking the function inside of the Child, but it's actually operating inside of the Parent.
        */}
        <button onClick={this.props.forgeSignature}>Forge the Permission Slip</button>
      </div>
    );
  };
};

export default Child;
