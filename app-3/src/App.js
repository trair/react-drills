import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      input: '',
    }
  }

  changeInput(evt) {
    this.setState({
      input: evt.target.value
    })
  }

  render() {
    let filteredList = this.state.list.filter(el => (
      el.includes(this.state.input)
    )).map((el, i) => (
      <h2 key={i}>{el}</h2>
    ))

    return (
      <div className="App">
        <input onChange={(evt) => this.changeInput(evt)} />
        <br />
        {filteredList}
        {/* {filteredList.map((el, i) => (                          //if I didn't chain the map function to filteredList, this code would work as well
          <h2 key={i}>{el}</h2>
        ))} */}
      </div>
    );
  }
}

export default App;
