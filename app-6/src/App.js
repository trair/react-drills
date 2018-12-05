// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Todo from './Components/Todo'

// class App extends Component {
//   // Pass down [tasks] array into Todo as a prop
//   constructor() {
//     super()
//     this.state = {
//       tasks: [],
//       input: '',
//     }
//   }

//   handleInput(evt) {
//     this.setState({
//       input: evt.target.value
//     })
//   }

//   addTodo() {
//     let newArray = this.state.tasks.slice()
//     newArray.push(this.state.input)
//     this.setState({
//       input: '',
//       tasks: newArray
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>
//         <input onChange={evt => this.handleInput(evt)} placeholder="Enter New Task" value={this.state.input} />
//         <button onClick={() => this.addTodo()}>Add</button>
//         <Todo list={this.state.tasks} />
//       </div>
//     );
//   }
// }

// export default App;

// Round 2
import React, {Component} from 'react'
import Todo from './Components/Todo'
import './App.css'

class App extends Component {
  state = {
    userInput: '',
    list: []
  }

  handleInput(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  addTodo() {
    let displayList = this.state.list.slice()
    displayList.push(this.state.userInput)
    this.setState({
      list: displayList,
      userInput: ''
    })
  }

  render(){
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={e => this.handleInput('userInput', e.target.value)} value={this.state.userInput} />
        <button onClick={e => this.addTodo()}>Add</button>
        <Todo tasks={this.state.list} />
      </div>
    )
  }
}

export default App