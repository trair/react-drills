import React, { Component } from 'react'
import NewTask from './Components/NewTask'
import List from './Components/List'
import './App.css';

class App extends Component {
  state = {
    list: [],
  }

  addNewTask = (task) => {
    let newArray = this.state.list.slice()
    newArray.push(task)
    this.setState({
      list: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <NewTask add={this.addNewTask} />
        <List tasks={this.state.list} />
      </div>
    )
  }
}

export default App