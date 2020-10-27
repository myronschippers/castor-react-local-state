import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NewEmployee from '../NewEmployee/NewEmployee';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     employee: 'Bob',
  //   };
  // }

  // EVENT LISTENER
  // $('.selector').on('change', handleClick)

  // handleNameChange = (event) => {
  //   // DO NOT DO
  //   // this.state.employee = event.target.value;

  //   // SETTING STATE
  //   this.setState(
  //     {
  //       employee: event.target.value,
  //     },
  //     () => {
  //       console.log('Changed', this.state.employee);
  //     }
  //   );
  // };

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <NewEmployee />
          <NewEmployee />
          <NewEmployee />
          <NewEmployee />
        </main>
      </div>
    );
  }
}

export default App;
