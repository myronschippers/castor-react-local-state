import React from 'react';
import './App.css';
import Header from '../Header/Header';
import IpsumParagraph from '../IpsumParagraph/IpsumParagraph';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="App">
          <IpsumParagraph />
          <IpsumParagraph />
          <IpsumParagraph />
        </main>
      </div>
    );
  }
}

export default App;
