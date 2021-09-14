import React, { Component } from 'react';
import Child from './Child';
import '../../assets/styles/parent.css';

class Parent extends Component {

  state = {
    fieldTrip: 'Art Museum',
    permissionSlip: true
  };

  revokePermission = () => {
    this.setState({
      permissionSlip: false
    });
  };

  forgeSignature = () => {
    this.setState({
      permissionSlip: true
    })
  }

  render() {
    return (
      <div>
        <h1>I am the parent.</h1>

        <div className="child">
          <Child 
            fieldTrip={this.state.fieldTrip} 
            permissionSlip={this.state.permissionSlip}
            forgeSignature={this.forgeSignature} 
          />
        </div>

        <button onClick={this.revokePermission}>You're grounded!</button>
      </div>
    );
  };
};

export default Parent;
