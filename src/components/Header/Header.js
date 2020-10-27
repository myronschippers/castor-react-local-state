import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <span>
          <img className="logo" src={logo} alt="React Logo" />
        </span>{' '}
        WORDS
      </header>
    );
  }
}

export default Header;
