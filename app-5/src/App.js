import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './Componenets/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url="https://http.cat/100" />
      </div>
    );
  }
}

export default App;
