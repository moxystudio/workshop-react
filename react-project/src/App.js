import React, { Component } from 'react';
import Header from './header/Header';
import Home from './pages/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
