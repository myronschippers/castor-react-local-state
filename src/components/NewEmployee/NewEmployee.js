import React, { Component } from 'react';

class NewEmployee extends Component {
  state = {
    employee: null,
  };

  handleNameChange = (event) => {
    // DO NOT DO
    // this.state.employee = event.target.value;

    // SETTING STATE
    this.setState({
      employee: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Your Name?"
          name="name"
          onChange={this.handleNameChange}
        />
        <span>My employee is {this.state.employee}</span>
      </div>
    );
  }
}

export default NewEmployee;
