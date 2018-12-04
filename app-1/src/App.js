import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  // changeInput(evt) {
  //   this.setState({
  //     input: evt
  //   })
  // }

  handleChange(prop, val) {                 //This method allows you to use one method to track lots of form changes
    this.setState({
      [prop]: val                           //The square brackets stops it from adding a key on state called 'prop'
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange('input', e.target.value)}/>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
