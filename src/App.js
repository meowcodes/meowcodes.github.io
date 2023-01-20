import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main';
import ContactBar from './ContactBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Main />
        {/* <ContactBar /> */}
      </div>
    );
  }
}

export default App;
