import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: 'Bob',
    };
  }

  // EVENT LISTENER
  // $('.selector').on('change', handleClick)

  handleNameChange = (event) => {
    // DO NOT DO
    // this.state.employee = event.target.value;

    // SETTING STATE
    this.setState(
      {
        employee: event.target.value,
      },
      () => {
        console.log('Changed', this.state.employee);
      }
    );
  };

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <input
            type="text"
            placeholder="Your Name?"
            name="name"
            onChange={this.handleNameChange}
          />
          <span>My employee is {this.state.employee}</span>
        </main>
      </div>
    );
  }
}

export default App;
