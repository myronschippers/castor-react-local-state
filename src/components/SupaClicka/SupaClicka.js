import React, { Component } from 'react';

class SupaClicka extends Component {
  state = {
    words: '',
  };

  handleWordClick = (event) => {
    this.setState({
      words: this.state.words + 'a',
    });
  };

  render() {
    return (
      <div>
        <p>What are words? {this.state.words}</p>
        <button onClick={this.handleWordClick}>Make Word</button>
      </div>
    );
  }
}

export default SupaClicka;
