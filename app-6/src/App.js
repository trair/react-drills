import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  // Pass down [tasks] array into Todo as a prop
  constructor() {
    super()
    this.state = {
      tasks: [],
      input: '',
    }
  }

  handleInput(evt) {
    this.setState({
      input: evt.target.value
    })
  }

  addTodo() {
    let newArray = this.state.tasks.slice()
    newArray.push(this.state.input)
    this.setState({
      input: '',
      tasks: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={evt => this.handleInput(evt)} placeholder="Enter New Task" value={this.state.input} />
        <button onClick={() => this.addTodo()}>Add</button>
        <Todo list={this.state.tasks} />
      </div>
    );
  }
}

export default App;
